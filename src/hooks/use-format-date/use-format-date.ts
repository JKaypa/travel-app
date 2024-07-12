import { useEffect, useState } from "react";
import { Booking } from "~/types/types";

const useFormatDate = (bookings: Booking[]) => {
  const [bookingsFormatted, setBookingsFormatted] = useState<Booking[]>();

  useEffect(() => {
    const formatted: Booking[] = [];

    bookings.forEach((booking) => {
      booking.date = booking.date.slice(0, 10);

      formatted.push(booking);
    });

    formatted.sort((a, b) => +new Date(a.date) - +new Date(b.date));

    setBookingsFormatted(formatted);
  }, [bookings]);

  return bookingsFormatted;
};

export { useFormatDate };
