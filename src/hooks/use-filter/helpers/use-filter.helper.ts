// import { firstUpperCase } from "./upper-case.helper";

type Trip = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};

const filterDuration = (trips: Trip[], duration: string) => {
  return trips.filter((trip) => {
    switch (duration) {
      case "0_x_5":
        return trip.duration <= 5;

      case "5_x_10":
        return trip.duration > 5 && trip.duration < 10;

      case "10":
        return trip.duration >= 10;
    }
  });
};

const filterLevel = (trips: Trip[], level: string) => {
  return trips.filter((trip) => trip.level === level);
};

const filterSearch = (trips: Trip[], search: string) => {
  return trips.filter((trip) => trip.title.toLowerCase().search(search.toLowerCase()) >= 0);
};

export { filterDuration, filterLevel, filterSearch };
