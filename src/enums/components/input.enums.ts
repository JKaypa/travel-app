const InputType = {
  DATE: "date",
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TEXT: "text",
} as const;

const Label = {
  DATE: "Date",
  EMAIL: "Email",
  NUMBER_GUESTS: "Number of guests",
  PASSWORD: "Password",
  FULL_NAME: "Full name",
  SEARCH_BY_NAME: "Search by name",
} as const;

const InputTest = {
  SEARCH: "filter-search",
  EMAIL: "auth-email",
  PASSWORD: "auth-password",
  FULL_NAME: "auth-full-name",
  DATE: "book-trip-popup-date",
  GUESTS: "book-trip-popup-guests",
} as const;

const Name = {
  DATE: "date",
  EMAIL: "email",
  FULL_NAME: "full-name",
  GUESTS: "guests",
  PASSWORD: "password",
  SEARCH: "search",
} as const;

const PlaceHolder = {
  SEARCH_TITLE: "search by title",
} as const;

export { InputTest, InputType, Label, Name, PlaceHolder };
