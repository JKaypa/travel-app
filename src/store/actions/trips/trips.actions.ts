import { createAsyncThunk } from "@reduxjs/toolkit";
import { Trip } from "~/types/types";
import { AsyncThunkConfig } from "../types/types";
import { name as trips } from "~/store/reducers/trips-slice/trips.reducer";

const getTrips = createAsyncThunk<Trip[], undefined, AsyncThunkConfig>(
  `${trips}/getTrips`,
  async (_, { extra: { tripsApi }, rejectWithValue }) => {
    try {
      return await tripsApi.getAllTrips();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getTripById = createAsyncThunk<Trip, string, AsyncThunkConfig>(
  `${trips}/getTrip`,
  async (payload, { extra: { tripsApi }, rejectWithValue }) => {
    try {
      return await tripsApi.getTripById(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { getTripById, getTrips };
