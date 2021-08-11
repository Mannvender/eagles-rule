import { Box } from "rebass";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import Input from "./Input";

const Container = styled(Box)`
  position: relative;
  border: 1px solid #424242;
  border-radius: 24px;
  background-color: #171717;
  font-weight: 300;
`;
const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 8px;
  top: 50%;
  height: 60%;
  width: 48px;
  transform: translateY(-50%);
  color: #8f8f8f;
  cursor: pointer;
`;

const SearchInput = (props) => {
  return (
    <>
      <Container pt={[2]} pb={[2]} pl={[5]} pr={[3]} my={[4]}>
        <Input {...props} />
        <SearchIcon />
      </Container>
    </>
  );
};

export default SearchInput;
