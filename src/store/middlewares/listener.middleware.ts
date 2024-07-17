import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { ErrorCode } from "~/enums/enums";
import {
  bookATrip,
  cancelBooking,
  getBookings,
  getTripById,
  getTrips,
  signout,
} from "../actions/actions";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    bookATrip.rejected,
    cancelBooking.rejected,
    getBookings.rejected,
    getTripById.rejected,
    getTrips.rejected
  ),

  effect: (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    if (action.payload === ErrorCode.UNAUTHORIZED) {
      listenerApi.dispatch(signout());
    }
  },
});

export { listenerMiddleware };
