import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Loader, Modal } from "~/components/components";
import { BtnChild, BtnCls, BtnTest } from "~/enums/enums";
import { useAppDispatch, useAppSelector } from "~/hooks/hooks";
import { cleanTrip, getTripById } from "~/store/actions/actions";
import "./styles/trip-detail.css";

const TripDetail = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { tripId } = useParams();
  const dispatch = useAppDispatch();
  const trip = useAppSelector((state) => state.trips.trip);

  useEffect(() => {
    if (tripId) {
      dispatch(getTripById(tripId));
    }
    return () => {
      dispatch(cleanTrip());
    };
  }, [dispatch, tripId]);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return trip ? (
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
            children={BtnChild.BOOK_A_TRIP}
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
        isHidden={isHidden}
        handleHidden={handleHidden}
      />
    </main>
  ) : (
    <Loader />
  );
};

export { TripDetail };
