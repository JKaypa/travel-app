import { createAsyncThunk } from "@reduxjs/toolkit";
import { name as bookings } from "~/store/reducers/bookings-slice/bookings.reducer";
import { BookingRequestDto, BookingResponseDto } from "~/types/types";
import { AsyncThunkConfig } from "../types/types";

const getBookings = createAsyncThunk<BookingResponseDto[], undefined, AsyncThunkConfig>(
  `${bookings}/getBookings`,
  async (_, { extra: { bookingsApi }, rejectWithValue }) => {
    try {
      return await bookingsApi.getBookings();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookATrip = createAsyncThunk<BookingResponseDto, BookingRequestDto, AsyncThunkConfig>(
  `${bookings}/bookATrip`,
  async (payload, { extra: { bookingsApi }, rejectWithValue }) => {
    try {
      return await bookingsApi.bookATrip(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cancelBooking = createAsyncThunk<BookingResponseDto[], string, AsyncThunkConfig>(
  `${bookings}/deleteBooking`,
  async (payload, { extra: { bookingsApi }, rejectWithValue }) => {
    try {
      await bookingsApi.deleteBooking(payload);
      return bookingsApi.getBookings();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { bookATrip, cancelBooking, getBookings };
