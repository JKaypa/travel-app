type BookingRequestDto = {
  tripId: string;
  guests: number;
  date: string;
};

type BookingResponseDto = {
  id: string;
  tripId: string;
  userId: string;
  guests: number;
  totalPrice: number;
  date: string;
  createdAt: string;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
};

export { type BookingRequestDto, type BookingResponseDto };
