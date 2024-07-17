import { Trip } from "~/types/types";
import { TripsAPI } from "./types/types";
import { load } from "~/services/services";

class Trips implements TripsAPI {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getAllTrips(): Promise<Trip[]> {
    return load(this.url);
  }

  public getTripById(id: string): Promise<Trip> {
    return load(`${this.url}/${id}`);
  }
}

export { Trips };
