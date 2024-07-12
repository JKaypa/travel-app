import dataBookings from "~/data/bookings.json";

type Booking = (typeof dataBookings)[0];

export { type Booking };
