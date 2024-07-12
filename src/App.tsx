import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { Router } from "./components/components";
import dataBookings from "./data/bookings.json";
import { Name, Route } from "./enums/enums";
import { AuthForm, Bookings, Layout, MainPage, TripDetail } from "./pages/pages";
import { TripSetters } from "./types/types";

function App() {
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [bookings, setBookings] = useState(dataBookings);

  const states = () => {
    return { date, totalPrice, guests, isHidden };
  };

  const setters = useCallback(
    ({ tripDate, tripGuests, tripPrice, tripTitle, tripId, tripDuration }: TripSetters) => {
      setDate(tripDate);
      setGuests(tripGuests);
      setPrice(tripPrice);
      setTitle(tripTitle);
      setTotalPrice(tripPrice);
      setId(tripId);
      setDuration(tripDuration);
    },
    []
  );

  const handleGuests = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === Name.GUESTS) {
      setGuests(+value);
      setTotalPrice(price * +value);
    } else {
      setDate(value);
    }
  };

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleClose = (id: string) => {
    const closedBooking = bookings.filter((booking) => booking.id !== id);
    setBookings(closedBooking);
  };

  const submitTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tripDate = new Date(date);
    const newBooking = {
      id: crypto.randomUUID(),
      userId: crypto.randomUUID(),
      tripId: id,
      guests,
      date: tripDate.toISOString().slice(0, 10),
      trip: {
        title,
        duration,
        price,
      },
      totalPrice,
      createdAt: new Date().toISOString(),
    };

    setBookings((bookings) => [...bookings, newBooking]);
    handleHidden();
  };

  return (
    <Router
      routes={[
        {
          element: <Layout />,
          children: [
            { path: Route.SIGNIN, element: <AuthForm /> },
            { path: Route.SIGNUP, element: <AuthForm /> },
            { path: Route.ROOT, element: <MainPage /> },
            {
              path: Route.TRIP_ID,
              element: (
                <TripDetail
                  handleGuests={handleGuests}
                  handleHidden={handleHidden}
                  setters={setters}
                  states={states}
                  submitTrip={submitTrip}
                />
              ),
            },
            {
              path: Route.BOOKINGS,
              element: <Bookings bookings={bookings} handleClose={handleClose} />,
            },
            { path: Route.UNKNOWN, element: <Navigate to={Route.ROOT} /> },
          ],
        },
      ]}
    />
  );
}

export default App;
