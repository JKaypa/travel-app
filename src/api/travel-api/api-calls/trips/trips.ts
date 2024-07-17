import { ApiRoute, BaseURL } from "../../enums/enums";
import { Trips } from "./trips-requests";

const url = `${BaseURL}${ApiRoute.TRIPS}`;

const tripsApi = new Trips(url);

export { tripsApi };
