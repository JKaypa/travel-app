import { BtnCls, BtnTest } from "~/enums/enums";
import { Button } from "../components";
import "./style/booking.css";

type Props = {
  id: string;
  title: string;
  guests: number;
  date: string;
  totalPrice: number;
  handleClose: (id: string) => void;
};

const Booking = ({ title, guests, date, totalPrice, id, handleClose }: Props) => {
  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {`${guests} guests`}
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {date}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {`$${totalPrice}`}
      </span>
      <Button
        cls={BtnCls.CANCEL}
        testId={BtnTest.CANCEL}
        title="Cancel booking"
        onClick={() => handleClose(id)}
      />
    </li>
  );
};

export { Booking };
