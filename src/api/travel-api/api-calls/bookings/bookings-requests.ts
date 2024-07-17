import { BookingRequestDto, BookingResponseDto } from "~/types/types";
import { BookingsApi } from "./types/types";
import { load } from "~/services/services";
import { Content, Method } from "../../enums/enums";

class Bookings implements BookingsApi {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public bookATrip(booking: BookingRequestDto): Promise<BookingResponseDto> {
    return load(this.url, {
      contentType: Content.JSON,
      body: JSON.stringify(booking),
      method: Method.POST,
    });
  }

  public getBookings(): Promise<BookingResponseDto[]> {
    return load(this.url);
  }

  public deleteBooking(id: string): Promise<string> {
    return load(`${this.url}/${id}`, {
      method: Method.DELETE,
    });
  }
}

export { Bookings };
