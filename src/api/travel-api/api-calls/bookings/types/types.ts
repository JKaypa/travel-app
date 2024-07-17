import { BookingRequestDto, BookingResponseDto } from "~/types/types";

type BookingsApi = {
  getBookings(): Promise<BookingResponseDto[]>;
  bookATrip(booking: BookingRequestDto): Promise<BookingResponseDto>;
  deleteBooking(id: string): Promise<string>;
};

export { type BookingsApi };
