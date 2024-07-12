const BtnTest = {
  CANCEL: "booking-cancel",
  SUBMIT: "auth-submit",
  POPUP_CLOSE: "book-trip-popup-close",
  POPUP_SUBMIT: "book-trip-popup-submit",
  DETAILS: "trip-details-button",
} as const;

const BtnCls = {
  CANCEL: "booking__cancel",
  CLOSE: "book-trip-popup__close",
  BUTTON: "button",
  TRIP: "trip__button button",
} as const;

const BtnChild = {
  SIGNIN: "Sign In",
  SIGNUP: "Sign Up",
  BOOK_A_TRIP: "Book a trip",
  X: "×",
} as const;

export { BtnChild, BtnCls, BtnTest };
