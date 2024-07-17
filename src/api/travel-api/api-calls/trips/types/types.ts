import { Trip } from "~/types/types";

type TripsAPI = {
  getAllTrips(): Promise<Trip[]>;
  getTripById(id: string): Promise<Trip>;
};

export { type TripsAPI };
