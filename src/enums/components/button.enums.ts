const BtnTest = {
  CANCEL: "booking-cancel",
  DETAILS: "trip-details-button",
  POPUP_CLOSE: "book-trip-popup-close",
  POPUP_SUBMIT: "book-trip-popup-submit",
  SIGNOUT: "header-profile-nav-sign-out",
  SUBMIT: "auth-submit",
} as const;

const BtnCls = {
  CANCEL: "booking__cancel",
  CLOSE: "book-trip-popup__close",
  BUTTON: "button",
  SIGNOUT: "profile-nav__sign-out button",
  TRIP: "trip__button button",
} as const;

const BtnChild = {
  BOOK_A_TRIP: "Book a trip",
  SIGNIN: "Sign In",
  SIGNUP: "Sign Up",
  SIGNOUT: "Sign Out",
  X: "×",
} as const;

export { BtnChild, BtnCls, BtnTest };
