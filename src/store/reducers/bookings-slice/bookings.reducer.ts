import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { bookATrip, cancelBooking, getBookings } from "~/store/actions/bookings/bookings.actions";
import { BookingResponseDto } from "~/types/types";

type State = {
  bookings: BookingResponseDto[] | null;
};

const initialState: State = {
  bookings: null,
};

const { name, reducer } = createSlice({
  initialState,
  name: "bookings",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookings.rejected, (state) => {
      state.bookings = null;
    });

    builder.addCase(bookATrip.fulfilled, (state, action) => {
      state.bookings?.push(action.payload);
    });

    builder.addMatcher(isAnyOf(getBookings.fulfilled, cancelBooking.fulfilled), (state, action) => {
      if (action.type === `${name}/deleteBooking/fulfilled`) {
        toast.success("Trip successfully cancelled");
      }
      state.bookings = action.payload;
    });
  },
});

export { name, reducer as bookingReducer };
