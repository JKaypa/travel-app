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
  required: boolean;
};

const Input = ({
  label,
  name,
  placeHolder,
  required = true,
  testId,
  type,
  labelCls,
  filterCls,
}: Props) => {
  const min = type === "number" ? "1" : undefined;
  const max = type === "number" ? "10" : undefined;
  const value = type === "number" ? "1" : undefined;

  return (
    <label className={`${filterCls} input`}>
      <span className={labelCls}>{label}</span>
      <input
        data-test-id={testId}
        name={name}
        type={type}
        placeholder={placeHolder}
        autoComplete={type === "password" ? "new-password" : "off"}
        min={min}
        max={max}
        value={value}
        required={required}
      />
      ;
    </label>
  );
};

export { Input };
