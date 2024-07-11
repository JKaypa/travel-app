import { ChangeEvent } from "react";
import { Filters, TripCard } from "~/components/components";
import { useFilter } from "~/hooks/hooks";
import "./styles/main-page.css";

const MainPage = () => {
  const { setDuration, setLevel, setSearch, trips } = useFilter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "duration") setDuration(value);
    else if (name === "level") setLevel(value);
    else if ((name === "search" && value.length > 2) || !value) {
      setSearch(value);
    }
  };

  return (
    <>
      <Filters handleChange={handleChange} />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {trips?.map(({ title, image, duration, level, price, id }) => (
            <TripCard
              title={title}
              image={image}
              duration={duration}
              level={level}
              price={price}
              id={id}
              key={id}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export { MainPage };
