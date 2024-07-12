import { BookingCard } from "~/components/components";
import { useFormatDate } from "~/hooks/hooks";
import { Booking } from "~/types/types";
import "./styles/bookings.css";

type Props = {
  bookings: Booking[];
  handleClose: (id: string) => void;
};

const Bookings = ({ bookings, handleClose }: Props) => {
  const bookingsFormatted = useFormatDate(bookings);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookingsFormatted?.map((booking) => (
          <BookingCard
            id={booking.id}
            title={booking.trip.title}
            guests={booking.guests}
            date={booking.date}
            totalPrice={booking.totalPrice}
            handleClose={handleClose}
            key={booking.id}
          />
        ))}
      </ul>
    </main>
  );
};

export { Bookings, type Props as NewBooking };
