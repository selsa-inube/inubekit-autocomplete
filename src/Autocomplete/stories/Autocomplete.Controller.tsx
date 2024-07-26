import { IOptionItem } from "@inubekit/select";
import { useState } from "react";
import { Autocomplete, IAutocomplete } from "..";

const AutocompleteController = (
  props: Omit<IAutocomplete, "value" | "onChange">,
) => {
  const { options, onOptionSelect, ...rest } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] =
    useState<IOptionItem[]>(options);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleOptionSelect = (option: IOptionItem) => {
    setInputValue(option.label);
    setFilteredOptions([]);
    onOptionSelect(option);
  };

  return (
    <Autocomplete
      {...rest}
      value={inputValue}
      onChange={handleInputChange}
      options={filteredOptions}
      onOptionSelect={handleOptionSelect}
    />
  );
};

export { AutocompleteController };
