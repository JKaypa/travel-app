import { configureStore } from "@reduxjs/toolkit";
import { authApi, bookingsApi, tripsApi } from "~/api/travel-api/api-requests";
import { storage } from "~/services/services";
import { authReducer, tripsReducer } from "./reducers/reducers";
import { bookingReducer } from "./reducers/bookings-slice/bookings.reducer";
import { listenerMiddleware } from "./middlewares/listener.middleware";

const extraArguments = {
  authApi,
  bookingsApi,
  storage,
  tripsApi,
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripsReducer,
    bookings: bookingReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument: extraArguments },
    }).prepend(listenerMiddleware.middleware);
  },
});

export { extraArguments, store };
