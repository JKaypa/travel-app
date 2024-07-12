import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Router } from "./components/components";
import { Name, Route } from "./enums/enums";
import { AuthForm, Layout, MainPage, TripDetail } from "./pages/pages";
import { TripSetters } from "./types/types";
import "./App.css";

function App() {
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const states = () => {
    return { totalPrice, guests, isHidden };
  };

  const setters = useCallback(({ tripPrice, tripTitle, tripId, tripDuration }: TripSetters) => {
    setPrice(tripPrice);
    setTitle(tripTitle);
    setTotalPrice(tripPrice);
    setId(tripId);
    setDuration(tripDuration);
  }, []);

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

  const submitTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          ],
        },
      ]}
    />
  );
}

export default App;
