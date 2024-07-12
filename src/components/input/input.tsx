import { ChangeEvent } from "react";
import { InputTest, InputType, Label, Name } from "~/enums/enums";
import { ValueOf } from "~/types/types";

type Props = {
  type: ValueOf<typeof InputType>;
  filterCls?: "trips-filter__search";
  labelCls?: "input__heading" | "visually-hidden";
  label: ValueOf<typeof Label>;
  name: ValueOf<typeof Name>;
  testId: ValueOf<typeof InputTest>;
  placeHolder?: "search by title";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  minLength?: number;
  maxLength?: number;
};

const Input = ({
  label,
  name,
  placeHolder,
  required = true,
  testId,
  type,
  labelCls = "input__heading",
  filterCls,
  onChange,
  value,
  max,
  min,
  maxLength,
  minLength,
}: Props) => {
  const auto = type === "password" ? "new-password" : "off";

  return (
    <label className={`${filterCls} input`}>
      <span className={labelCls}>{label}</span>
      <input
        data-test-id={testId}
        name={name}
        type={type}
        placeholder={placeHolder}
        autoComplete={auto}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export { Input };
