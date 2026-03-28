# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Artifacts

### `artifacts/panditghar` (`@workspace/panditghar`)

React + Vite frontend for PanditGhar.in — a Hindu puja booking platform for Bangalore. Features:
- Bilingual (Hindi/English) with language toggle via `/hi` and `/en` URL prefixes
- Pages: Home, Services, ServiceDetail, LocationPage, ShubhMuhurat, About, Contact, Blog
- Booking form that saves to DB and redirects to WhatsApp
- SEO-optimized with structured data, sitemap, robots.txt
- Saffron/maroon color theme with Hindi typography

#### Deployment: Vercel

The easiest platform for deploying PanditGhar.in. Zero config needed — the `vercel.json` already handles everything.

**Steps:**
1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repository.
3. In Project Settings, set:
   - **Root Directory**: `artifacts/panditghar` (Vercel will run from this subdirectory)
   - **Build Command**: `cd ../.. && pnpm --filter @workspace/panditghar run build:vercel`
   - **Output Directory**: `dist/public` (relative to Root Directory)
4. No env vars are required for a static deploy. Add `CUSTOM_DOMAIN=panditghar.in` if using a custom domain.
5. Click **Deploy**.

**Custom domain**: In Vercel project settings → Domains, add `panditghar.in` and `www.panditghar.in`, then point your DNS to Vercel's nameservers.

**Local Vercel build test:**
```bash
pnpm --filter @workspace/panditghar run build:vercel
# Output is at: artifacts/panditghar/dist/public/
```

#### Deployment: GitHub Pages

**Steps:**
1. Push the repo to GitHub (name the repo `panditghar` for the default base path `/panditghar/`).
2. In GitHub repo → Settings → Pages, set source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-panditghar.yml` will run automatically on every push to `main`.
4. Optional: Set repository variables in GitHub → Settings → Variables:
   - `GHPAGES_BASE`: Set to `/panditghar/` (default) or `/` if using a custom domain.
   - `CUSTOM_DOMAIN`: Set to `panditghar.in` if you have a custom domain (writes a `CNAME` file).
5. Wait for the Action to complete, then access at `https://<your-github-username>.github.io/panditghar/en`.

**Custom domain on GitHub Pages:** Set `CUSTOM_DOMAIN=panditghar.in` as a repo variable. In your DNS, add a CNAME record pointing `panditghar.in` to `<username>.github.io`.

**Local GitHub Pages build test:**
```bash
GHPAGES_BASE=/panditghar/ pnpm --filter @workspace/panditghar run build:ghpages
# Output is at: artifacts/panditghar/dist/public/
```

#### Build Scripts Summary

| Script | Purpose |
|---|---|
| `pnpm --filter @workspace/panditghar run build` | Default build (BASE_PATH=/) for Replit deploy |
| `pnpm --filter @workspace/panditghar run build:vercel` | Vercel build (BASE_PATH=/) |
| `pnpm --filter @workspace/panditghar run build:ghpages` | GitHub Pages build (BASE_PATH from GHPAGES_BASE env var) |
| `pnpm --filter @workspace/panditghar run generate-sitemap` | Regenerate sitemap.xml only |

#### Public Assets in Build

All files in `artifacts/panditghar/public/` are automatically copied by Vite into `dist/public/`:
- `images/` — service and background images
- `favicon.svg` — site icon
- `opengraph.jpg` — OG social image
- `sitemap.xml` — auto-generated at build time (run `generate-sitemap` to regenerate)
- `robots.txt` — search engine directives
- `404.html` — GitHub Pages SPA routing redirect trick (auto-generated by `generate-sitemap` with correct base path from `GHPAGES_BASE`/`BASE_PATH`)

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
