const parameters = {
  docs: {
    description: {
      component:
        "Autocomplete component that suggests options as the user types.",
    },
  },
};

const props = {
  label: {
    description: "Label for the autocomplete input.",
    control: "text",
  },
  name: {
    description: "Name attribute for the input field.",
    control: "text",
  },
  id: {
    description: "ID attribute for the input field.",
    control: "text",
  },
  placeholder: {
    description: "Placeholder text for the input field.",
    control: "text",
  },
  disabled: {
    description: "Disables the input field.",
    control: "boolean",
    defaultValue: false,
  },
  required: {
    description: "Marks the input field as required.",
    control: "boolean",
    defaultValue: false,
  },
  status: {
    description: "Status of the input field.",
    control: "select",
    options: ["invalid", "pending"],
  },
  message: {
    description: "Message to display under the input field.",
    control: "text",
  },
  size: {
    description: "Size of the input field.",
    control: "select",
    options: ["wide", "compact"],
    defaultValue: "wide",
  },
  fullwidth: {
    description:
      "If true, the input field will take the full width of its container.",
    control: "boolean",
    defaultValue: false,
  },
  options: {
    description: "Options for the autocomplete dropdown.",
    control: "object",
  },
  onOptionSelect: {
    description: "Callback function when an option is selected.",
    action: "optionSelected",
  },
};

export { parameters, props };
