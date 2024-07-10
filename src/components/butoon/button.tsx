import { BtnCls, BtnTest, Title } from "~/enums/enums";
import { ValueOf } from "~/types/types";

type Props = {
  testId: ValueOf<typeof BtnTest>;
  cls: ValueOf<typeof BtnCls>;
  type?: "submit";
  children: JSX.Element | ValueOf<typeof Title>;
};

const cancelBooking = (
  <>
    <span className="visually-hidden">Cancel booking</span>×
  </>
);

const Button = ({ children = cancelBooking, cls, testId, type }: Props) => {
  <button data-test-id={testId} className={cls} type={type}>
    {children}
  </button>;
};

export default Button;
