const BtnTest = {
  PROFILE: "header-profile-nav-sign-out",
  SUBMIT: "auth-submit",
  POPUP_CLOSE: "book-trip-popup-close",
  POPUP_SUBMIT: "book-trip-popup-submit",
  DETAILS: "trip-details-button",
} as const;

const BtnCls = {
  PROFILE_NAV: "profile-nav__sign-out",
  CLOSE: "book-trip-popup__close",
  BUTTON: "button",
  SIGNOUT: "profile-nav__sign-out button",
  TRIP: "trip__button button",
} as const;

const Title = {
  SIGNIN: "Sign In",
  SIGNOUT: "Sign Out",
  SIGNUP: "Sign Up",
  BOOK_A_TRIP: "Book a trip",
  X: "×",
} as const;

export { BtnCls, Title, BtnTest };
