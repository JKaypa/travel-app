import { useEffect, useState } from "react";
import dataTrips from "~/data/trips.json";
import { filterDuration, filterLevel, filterSearch } from "./helpers/use-filter.helper";

export function useFilter() {
  const [trips, setTrips] = useState(dataTrips);
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let data = dataTrips;
    console.log(data);

    if (search) data = filterSearch(data, search);
    if (duration) data = filterDuration(data, duration);
    if (level) data = filterLevel(data, level);

    setTrips(data);
  }, [duration, level, search]);

  return { trips, setDuration, setLevel, setSearch };
}
