import { IOptionItem, OptionItem, OptionList } from "@inubekit/select";
import { ITextfield, Textfield } from "@inubekit/textfield";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyledClearIcon, StyledWrapper } from "./styles";
import {
  MdAddCircle,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";
import { Icon } from "@inubekit/icon";

interface IAutocomplete extends Omit<ITextfield, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  options: IOptionItem[];
  onOptionSelect: (selectedOption: IOptionItem) => void;
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
    options,
    onOptionSelect,
    required,
    status,
    message,
    size,
    fullwidth,
    onFocus,
    onBlur,
  } = props;

  const [filteredOptions, setFilteredOptions] = useState<IOptionItem[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setFilteredOptions([]);
      setShowOptions(false);
    }
  }, [value, options]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange(event.target.value);
      setActiveOption(0);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  };

  const handleOptionClick = (optionId: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedOption = filteredOptions.find(
        (option) => option.id === optionId.target.id,
      );
      if (selectedOption) {
        onOptionSelect(selectedOption);
        setShowOptions(false);
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (filteredOptions[activeOption]) {
          onOptionSelect(filteredOptions[activeOption]);
        }
        setShowOptions(false);
      } else if (event.key === "ArrowUp") {
        if (activeOption > 0) setActiveOption(activeOption - 1);
      } else if (event.key === "ArrowDown") {
        if (activeOption < filteredOptions.length - 1)
          setActiveOption(activeOption + 1);
      }
    },
    [activeOption, filteredOptions, onOptionSelect],
  );

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handleKeyDown]);

  const handleClear = () => {
    onChange("");
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      <Textfield
        label={label}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        iconAfter={
          showOptions ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />
        }
        required={required}
        status={status}
        message={message}
        size={size}
        fullwidth={fullwidth}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {value && !disabled && (
        <StyledClearIcon>
          <Icon
            appearance="gray"
            icon={<MdAddCircle />}
            size="20px"
            onClick={handleClear}
          />
        </StyledClearIcon>
      )}
      {showOptions && filteredOptions.length > 0 && (
        <OptionList onClick={handleOptionClick}>
          {filteredOptions.map((option) => (
            <OptionItem key={option.id} id={option.id} label={option.label} />
          ))}
        </OptionList>
      )}
    </StyledWrapper>
  );
};

export { Autocomplete };
export type { IAutocomplete };
