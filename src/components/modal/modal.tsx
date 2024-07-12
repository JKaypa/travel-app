import { useEffect } from "react";
import { BtnChild, BtnCls, BtnTest, InputTest, InputType, Label, Name } from "~/enums/enums";
import { TripProps } from "~/types/types";
import { Button, Input } from "../components";
import { Guests } from "./enum/guests.enum";
import "./styles/modal.css";

type Props = TripProps & {
  tripId: string;
  title: string;
  duration: number;
  level: string;
  price: number;
};

const Modal = ({
  setters,
  states,
  handleHidden,
  handleGuests,
  submitTrip,
  tripId,
  title,
  duration,
  level,
  price,
}: Props) => {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  useEffect(() => {
    setters({
      tripDate: tomorrow,
      tripGuests: 1,
      tripPrice: price,
      tripTitle: title,
      tripId,
      tripDuration: duration,
    });
  }, [duration, price, setters, title, tripId, tomorrow]);

  const { date, guests, totalPrice, isHidden } = states();

  return (
    <div hidden={isHidden}>
      <div className="modal">
        <div data-test-id="book-trip-popup" className="book-trip-popup">
          <Button
            children={BtnChild.X}
            cls={BtnCls.CLOSE}
            testId={BtnTest.POPUP_CLOSE}
            onClick={handleHidden}
          />
          <form className="book-trip-popup__form" autoComplete="off" onSubmit={submitTrip}>
            <div className="trip-info">
              <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                {title}
              </h3>
              <div className="trip-info__content">
                <span data-test-id="book-trip-popup-duration" className="trip-info__duration">
                  <strong>{duration}</strong> days
                </span>
                <span data-test-id="book-trip-popup-level" className="trip-info__level">
                  {level}
                </span>
              </div>
            </div>
            <Input
              label={Label.DATE}
              name={Name.DATE}
              testId={InputTest.DATE}
              type={InputType.DATE}
              min={tomorrow}
              value={date}
              onChange={handleGuests}
            />
            <Input
              label={Label.NUMBER_GUESTS}
              name={Name.GUESTS}
              testId={InputTest.GUESTS}
              type={InputType.NUMBER}
              min={Guests.MIN}
              max={Guests.MAX}
              value={guests}
              onChange={handleGuests}
            />
            <span className="book-trip-popup__total">
              Total:
              <output
                data-test-id="book-trip-popup-total-value"
                className="book-trip-popup__total-value"
              >
                {`$${totalPrice}`}
              </output>
            </span>
            <Button
              children={BtnChild.BOOK_A_TRIP}
              cls={BtnCls.BUTTON}
              testId={BtnTest.POPUP_SUBMIT}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export { Modal };
