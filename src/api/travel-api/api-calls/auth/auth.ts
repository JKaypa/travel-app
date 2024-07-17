import { ApiRoute, BaseURL } from "../../enums/enums";
import { Auth } from "./auth-requests";

const authApi = new Auth(`${BaseURL}${ApiRoute.AUTH}`);

export { authApi };
