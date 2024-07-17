import { useEffect, useState } from "react";
import { BookingResponseDto } from "~/types/types";

const useFormatDate = (bookings: BookingResponseDto[] | null) => {
  const [bookingsFormatted, setBookingsFormatted] = useState<BookingResponseDto[] | null>();

  useEffect(() => {
    const formatted: BookingResponseDto[] = [];

    bookings?.forEach((booking) => {
      const bookingCopy = { ...booking };
      bookingCopy.date = bookingCopy.date.slice(0, 10);

      formatted.push(bookingCopy);
    });

    formatted.sort((a, b) => +new Date(a.date) - +new Date(b.date));

    setBookingsFormatted(formatted);
  }, [bookings]);

  return bookingsFormatted;
};

export { useFormatDate };
