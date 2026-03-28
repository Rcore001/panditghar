import { useState } from 'react';
import { motion } from 'framer-motion';

const PALETTES: Record<string, { gradient: string; glowColor: string }> = {
  small:   { gradient: 'linear-gradient(135deg,#7a2800 0%,#c45c14 40%,#e07800 100%)',   glowColor: 'rgba(224,120,0,0.45)' },
  sanskar: { gradient: 'linear-gradient(135deg,#6b0f2b 0%,#a91c50 40%,#cc3d72 100%)',   glowColor: 'rgba(204,61,114,0.45)' },
  large:   { gradient: 'linear-gradient(135deg,#3d0a0a 0%,#7a1c1c 40%,#a82828 100%)',   glowColor: 'rgba(255,204,0,0.45)' },
  festival:{ gradient: 'linear-gradient(135deg,#380066 0%,#7b1fa2 40%,#e65100 100%)',   glowColor: 'rgba(255,193,7,0.45)' },
  dosha:   { gradient: 'linear-gradient(135deg,#003833 0%,#005f52 40%,#008a7a 100%)',   glowColor: 'rgba(0,188,212,0.45)' },
  jyotish: { gradient: 'linear-gradient(135deg,#05052a 0%,#0d0d4b 40%,#2424a0 100%)',   glowColor: 'rgba(197,202,233,0.45)' },
};

function MandalaSVG() {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];
  const dots   = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity: 0.15 }}
    >
      {[88, 72, 56, 40, 24].map(r => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="white" strokeWidth="0.7" />
      ))}
      {spokes.map(angle => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={100 + Math.cos(rad) * 25} y1={100 + Math.sin(rad) * 25}
            x2={100 + Math.cos(rad) * 86} y2={100 + Math.sin(rad) * 86}
            stroke="white" strokeWidth="0.6"
          />
        );
      })}
      {spokes.map(angle => {
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + Math.cos(rad) * 64;
        const cy = 100 + Math.sin(rad) * 64;
        return (
          <ellipse
            key={angle} cx={cx} cy={cy} rx="9" ry="4.5"
            transform={`rotate(${angle},${cx},${cy})`}
            fill="white" fillOpacity="0.18" stroke="white" strokeWidth="0.5"
          />
        );
      })}
      {dots.map(angle => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={100 + Math.cos(rad) * 40}
            cy={100 + Math.sin(rad) * 40}
            r="2.5" fill="white" fillOpacity="0.35"
          />
        );
      })}
      <text x="100" y="108" textAnchor="middle" fontSize="28" fill="white" fillOpacity="0.15" fontFamily="serif">
        ॐ
      </text>
    </svg>
  );
}

export function ServiceCardImage({
  src,
  alt,
  icon,
  hiTitle,
  category,
  showHoverZoom = true,
}: {
  src: string;
  alt: string;
  icon: string;
  hiTitle: string;
  category: string;
  showHoverZoom?: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const palette = PALETTES[category] ?? PALETTES.small;

  return (
    <div className="w-full h-full relative overflow-hidden">
      {!imgError ? (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
          whileHover={showHoverZoom ? { scale: 1.08 } : undefined}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: palette.gradient }}
        >
          <MandalaSVG />
          <motion.div
            className="relative z-10"
            whileHover={showHoverZoom ? { scale: 1.12 } : undefined}
            transition={{ duration: 0.35 }}
          >
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 76,
                height: 76,
                background: palette.glowColor,
                boxShadow: `0 0 32px ${palette.glowColor}, 0 0 12px rgba(0,0,0,0.3)`,
              }}
            >
              <span className="text-4xl select-none" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}>
                {icon}
              </span>
            </div>
          </motion.div>
          <p
            className="relative z-10 mt-3 text-center px-4 font-hindi leading-snug"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
              maxWidth: '80%',
            }}
          >
            {hiTitle}
          </p>
        </div>
      )}

      {/* CSS shimmer sweep on parent group hover */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div
          className="-translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out absolute inset-0"
          style={{
            background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.11) 50%,transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}
