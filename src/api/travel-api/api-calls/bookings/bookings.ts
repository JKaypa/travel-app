import { ApiRoute, BaseURL } from "../../enums/enums";
import { Bookings } from "./bookings-requests";

const url = `${BaseURL}${ApiRoute.BOOKINGS}`;

const bookingsApi = new Bookings(url);

export { bookingsApi };
