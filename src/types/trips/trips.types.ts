import { TripCardProps } from "~/components/trip-card/trip-card";

type TripSetters = {
  tripDate: string;
  tripGuests: number;
  tripPrice: number;
  tripTitle: string;
  tripId: string;
  tripDuration: number;
};

type Trip = TripCardProps & {
  description: string;
  createdAt: string;
};

export { type Trip, type TripSetters };
