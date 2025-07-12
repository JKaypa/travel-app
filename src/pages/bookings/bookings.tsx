import { BookingCard, Loader } from "~/components/components";
import { useAppDispatch, useAppSelector, useFormatDate } from "~/hooks/hooks";
import { cancelBooking, getBookings } from "~/store/actions/actions";
import "./styles/bookings.css";
import { APP_NAME } from "~/constants/app-name";
import { useEffect } from "react";

const Bookings = () => {
  const bookings = useAppSelector((state) => state.bookings.bookings);
  const bookingsFormatted = useFormatDate(bookings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  const handleClose = (id: string) => {
    dispatch(cancelBooking(id));
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">{APP_NAME}</h1>
      <ul className="bookings__list">
        {bookingsFormatted ? (
          bookingsFormatted.map((booking) => (
            <BookingCard
              id={booking.id}
              title={booking.trip.title}
              guests={booking.guests}
              date={booking.date}
              totalPrice={booking.totalPrice}
              handleClose={handleClose}
              key={booking.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </main>
  );
};

export { Bookings };
