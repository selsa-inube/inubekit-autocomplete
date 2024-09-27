import { IAutocomplete } from "..";

import { props, parameters } from "../props";
import { AutocompleteController } from "./Autocomplete.controller";

const story = {
  title: "Inputs/Autocomplete",
  component: [AutocompleteController],
  parameters,
  argTypes: {
    ...props,
  },
};

const optionsMock = [
  { id: "op1", label: "Option 1", value: "option-1" },
  { id: "op2", label: "Option 2", value: "option-2" },
  { id: "op3", label: "Option 3", value: "option-3" },
  { id: "op4", label: "Option 4", value: "option-4" },
];

const Default = (args: IAutocomplete) => <AutocompleteController {...args} />;

Default.args = {
  label: "Country",
  name: "autocomplete",
  id: "autocomplete",
  placeholder: "Please type something...",
  value: "",
  disabled: false,
  options: optionsMock,
  required: false,
  size: "wide",
  fullwidth: false,
};

export default story;
export { Default };
