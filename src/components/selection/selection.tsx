import { ChangeEvent } from "react";
import { decodeEntity } from "./helpers/decode-entity.helper";
import "./styles/selection.css";

type Props = {
  filteredBy: string;
  options: { value: string; name: string }[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Selection = ({ filteredBy, options, handleChange }: Props) => {
  return (
    <label className="select">
      <span className="visually-hidden">{`Search by ${filteredBy}`}</span>
      <select data-test-id={`filter-${filteredBy}`} name={filteredBy} onChange={handleChange}>
        <option value="">{filteredBy}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {decodeEntity(option.name)}
          </option>
        ))}
      </select>
    </label>
  );
};

export { Selection };
