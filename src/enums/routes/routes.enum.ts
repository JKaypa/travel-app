const Route = {
  BOOKINGS: "/bookings",
  ROOT: "/",
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  TRIP_ID: "/trip/:tripId",
  TRIP: "/trip/",
  UNKNOWN: "*",
} as const;

export { Route };
