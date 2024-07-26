import { IOptionItem } from "@inubekit/select";
import { IAutocomplete } from "..";
import { parameters, props } from "../props";
import { AutocompleteController } from "./Autocomplete.Controller";

const story = {
  title: "Inputs/Autocomplete",
  component: AutocompleteController,
  parameters,
  argTypes: props,
};

const optionsMock: IOptionItem[] = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
  { id: "4", label: "Option 4" },
];

const Default = (args: IAutocomplete) => <AutocompleteController {...args} />;

Default.args = {
  label: "Search",
  name: "autocomplete",
  id: "autocomplete",
  placeholder: "Ingresa un valor...",
  options: optionsMock,
  required: false,
  disabled: false,
  fullwidth: false,
  size: "wide",
  message: "",
  status: "pending",
  iconBefore: "",
  iconAfter: "",
};

export { Default };
export default story;
