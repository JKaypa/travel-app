import dataTrips from "~/data/trips.json";
import { useParams } from "react-router-dom";
import { Button, Modal } from "~/components/components";
import { ChangeEvent, FormEvent } from "react";
import { BtnCls, BtnTest, Title } from "~/enums/enums";
import "./styles/trip-detail.css";
import { TripSetters } from "~/types/types";

type Props = {
  handleGuests: (event: ChangeEvent<HTMLInputElement>) => void;
  setters: ({ tripPrice, tripTitle, tripId, tripDuration }: TripSetters) => void;
  states: () => {
    totalPrice: number;
    guests: number;
    isHidden: boolean;
  };
  submitTrip: (event: FormEvent<HTMLFormElement>) => void;
  handleHidden: () => void;
};

const TripDetail = ({ handleGuests, setters, states, submitTrip, handleHidden }: Props) => {
  const { tripId } = useParams();
  const [trip] = dataTrips.filter((trip) => trip.id === tripId);

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img
          data-test-id="trip-details-image"
          src={trip.image}
          className="trip__img"
          alt="trip photo"
        />
        <div className="trip__content">
          <div className="trip-info">
            <h3 data-test-id="trip-details-title" className="trip-info__title">
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span data-test-id="trip-details-duration" className="trip-info__duration">
                <strong>{trip.duration}</strong> days
              </span>
              <span data-test-id="trip-details-level" className="trip-info__level">
                {trip.level}
              </span>
            </div>
          </div>
          <div data-test-id="trip-details-description" className="trip__description">
            {trip.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong data-test-id="trip-details-price-value" className="trip-price__value">
              {`$${trip.price}`}
            </strong>
          </div>
          <Button
            children={Title.BOOK_A_TRIP}
            cls={BtnCls.TRIP}
            testId={BtnTest.DETAILS}
            onClick={handleHidden}
          />
        </div>
      </div>
      <Modal
        tripId={trip.id}
        title={trip.title}
        duration={trip.duration}
        level={trip.level}
        price={trip.price}
        handleHidden={handleHidden}
        handleGuests={handleGuests}
        setters={setters}
        states={states}
        submitTrip={submitTrip}
      />
    </main>
  );
};

export { TripDetail, type Props as TripProps };
