import { ChangeEvent } from "react";
import { InputTest, InputType, Label, Name, PlaceHolder } from "~/enums/enums";
import { Input, Selection } from "../components";
import { duration, level } from "../selection/helpers/options.helper";
import "./styles/filters.css";

type Props = {
  handleChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

const Filters = ({ handleChange }: Props) => {
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <Input
          label={Label.SEARCH_BY_NAME}
          name={Name.SEARCH}
          testId={InputTest.SEARCH}
          type={InputType.SEARCH}
          placeHolder={PlaceHolder.SEARCH_TITLE}
          filterCls="trips-filter__search"
          labelCls="visually-hidden"
          onChange={handleChange}
          required={false}
        />
        <Selection filteredBy="duration" options={duration} handleChange={handleChange} />
        <Selection filteredBy="level" options={level} handleChange={handleChange} />
      </form>
    </section>
  );
};

export { Filters };
