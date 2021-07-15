import { Flex as Base, Link as LinkBase, Box, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { FaTwitter, FaRedditAlien } from "react-icons/fa";

const Flex = styled(Base)`
  box-shadow: rgb(0, 0, 0) 0px 2px 3px 0px;
  z-index: 1;
`;
const Link = styled(LinkBase)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = (props) => {
  const { colors } = useTheme();
  console.log(colors);
  return (
    <Flex
      px={3}
      alignItems="center"
      backgroundColor={colors.darkGray}
      mb={1}
      {...props}
    >
      <Text p={3} fontSize={22} fontWeight="bold" color={colors.primary} mr={3}>
        Freedom Eagles
      </Text>
      <Box mx="auto" />
      <Box>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          About
        </Link>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          Eagles
        </Link>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          Eagleverse
        </Link>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          Roadmap
        </Link>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          Team
        </Link>
        <Link variant="nav" href="https://rebassjs.org" p={4}>
          FAQs
        </Link>
      </Box>
      <Box mx="auto" />
      <Box mr={4}>
        <FaTwitter size="1.5rem" style={{ marginRight: "1rem" }} />
        <FaRedditAlien size="1.5rem" />
      </Box>
    </Flex>
  );
};

export default Header;
