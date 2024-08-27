import { useState } from "react";
import { Select, IOption, ISelect } from "@inubekit/select";

interface IAutocomplete extends Omit<ISelect, "onChange" | "value"> {
  value: string;
  onChange: (name: string, value: string) => void;
  options: IOption[];
}

const Autocomplete = (props: IAutocomplete) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    value,
    onChange,
    options = [],
    required,
    size,
    fullwidth,
    onFocus,
    onBlur,
  } = props;

  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const handleFilter = (newValue: string) => {
    if (newValue) {
      const normalizedValue = newValue.trim().toLowerCase();
      const filtered = options.filter(
        (option) =>
          option.value && option.value.toLowerCase().includes(normalizedValue),
      );
      setFilteredOptions(filtered);
      setShowOptions(filtered.length > 0);
    } else {
      setFilteredOptions(options);
      setShowOptions(false);
    }
  };

  const interceptChange = (name: string, value: string) => {
    setShowOptions(false);
    try {
      onChange && onChange(name, value);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  return (
    <Select
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={interceptChange}
      options={filteredOptions}
      required={required}
      size={size}
      fullwidth={fullwidth}
      onFocus={onFocus}
      onBlur={onBlur}
      readonly={false}
      showOptions={showOptions}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
        handleFilter((e.target as HTMLInputElement).value)
      }
    />
  );
};

export { Autocomplete };
export type { IAutocomplete };
