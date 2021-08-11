import { Box } from "rebass";
import styled from "styled-components";

const StyledBox = styled(Box)`
  :hover {
    background-color: transparent;
  }
`;

const Badge = ({ children, bgColor, border, onClick, ...rest }) => {
  return (
    <StyledBox
      sx={{
        display: "inline-block",
        color: "white",
        bg: bgColor,
        px: 3,
        py: 1,
        borderRadius: 9999,
        fontSize: 2,
        my: 2,
        border,
        ...rest,
      }}
      onClick={onClick}
    >
      {children}
    </StyledBox>
  );
};

export default Badge;