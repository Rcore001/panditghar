import { Router, type IRouter } from "express";
import { db, bookingsTable } from "@workspace/db";
import { CreateBookingBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/bookings", async (req, res) => {
  const parseResult = CreateBookingBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: parseResult.error.message });
    return;
  }

  const data = parseResult.data;

  try {
    const [booking] = await db
      .insert(bookingsTable)
      .values({
        name: data.name,
        phone: data.phone,
        location: data.location,
        service: data.service,
        date: data.date,
        language: data.language ?? "hi",
        message: data.message ?? null,
      })
      .returning();

    res.status(201).json({
      id: booking.id,
      name: booking.name,
      phone: booking.phone,
      location: booking.location,
      service: booking.service,
      date: booking.date,
      language: booking.language,
      message: booking.message,
      createdAt: booking.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to create booking");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const bookings = await db.select().from(bookingsTable);
    res.json(
      bookings.map((b) => ({
        id: b.id,
        name: b.name,
        phone: b.phone,
        location: b.location,
        service: b.service,
        date: b.date,
        language: b.language,
        message: b.message,
        createdAt: b.createdAt.toISOString(),
      }))
    );
  } catch (err) {
    req.log.error({ err }, "Failed to fetch bookings");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
