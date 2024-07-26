import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "280px")};

  & > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

export { StyledWrapper };
