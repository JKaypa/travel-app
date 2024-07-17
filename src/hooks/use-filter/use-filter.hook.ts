import { useEffect, useState } from "react";
import { filterDuration, filterLevel, filterSearch } from "./helpers/use-filter.helper";
import { useAppSelector } from "../hooks";
import { Trip } from "~/types/types";

export function useFilter() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");

  const tripsState = useAppSelector((state) => state.trips.trips) as Trip[];

  useEffect(() => {
    let data = tripsState;

    if (search) data = filterSearch(data, search);
    if (duration) data = filterDuration(data, duration);
    if (level) data = filterLevel(data, level);

    setTrips(data);
  }, [duration, level, search, tripsState]);

  return { trips, setDuration, setLevel, setSearch };
}
