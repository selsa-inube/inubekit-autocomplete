import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "280px")};

  & > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

const StyledClearIcon = styled.div`
  position: relative;
  top: -36px;
  left: 213px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  & > figure {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export { StyledClearIcon, StyledWrapper };
