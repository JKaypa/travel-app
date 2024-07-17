import { createSlice } from "@reduxjs/toolkit";
import { getTripById, getTrips } from "~/store/actions/actions";
import { Trip } from "~/types/types";

type State = {
  trips: Trip[] | null;
  trip: Trip | null;
};

const initialState: State = {
  trips: [],
  trip: null,
};

const { actions, name, reducer } = createSlice({
  initialState,
  name: "trips",
  reducers: {
    cleanTrip: (state) => {
      state.trip = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrips.fulfilled, (state, action) => {
      state.trips = action.payload;
    });
    builder.addCase(getTrips.rejected, (state) => {
      state.trips = null;
    });
    builder.addCase(getTripById.fulfilled, (state, action) => {
      state.trip = action.payload;
    });
    builder.addCase(getTripById.rejected, (state) => {
      state.trip = null;
    });
  },
});

const { cleanTrip } = actions;

export { cleanTrip, name, reducer as tripsReducer };
