import { useState } from "react";
import { Autocomplete, IAutocomplete } from "..";

const AutocompleteController = (props: IAutocomplete) => {
  const { id, value = "", options } = props;
  const [form, setForm] = useState({ [String(id)]: value });

  const handleChange = (_name: string, newValue: string) => {
    setForm({ ...form, [String(id)]: newValue });
  };

  return (
    <Autocomplete
      {...props}
      value={form[String(id)]}
      onChange={handleChange}
      options={options}
    />
  );
};

export { AutocompleteController };
