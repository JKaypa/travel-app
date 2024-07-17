const BaseURL = "https://travel-app-api.up.railway.app/api/v1" as const;

const ApiRoute = {
  AUTH: "/auth",
  BOOKINGS: "/bookings",
  TRIPS: "/trips",
} as const;

const Endpoint = {
  AUTHENTICATED: "/authenticated-user",
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
} as const;

export { ApiRoute, BaseURL, Endpoint };
