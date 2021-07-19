import { Flex as Base, Link as LinkBase, Box, Text as TextBase } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import {
  FaTwitter,
  FaRedditAlien,
  FaDiscord,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { BsInfoSquare } from "react-icons/bs";
import { GiEagleHead, GiStonePath } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { isMobile } from "react-device-detect";

import useScroll from "../hooks/scroll";

const Flex = styled(Base)`
  box-shadow: rgb(0, 0, 0) 0px 2px 3px 0px;
  z-index: 1;
`;
const Link = styled(LinkBase)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const LinksContainer = styled(Box)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
const Text = styled(TextBase)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
const BottomNav = styled(Flex)`
  z-index: 9;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.offWhite};
`;
const StyledLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 400;
`;
const Reddit = styled(FaRedditAlien)`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #ff4500;
  }
`;
const Twitter = styled(FaTwitter)`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgb(29, 161, 242);
  }
`;
const Discord = styled(FaDiscord)`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #7289da;
  }
`;

const Header = (props) => {
  const { colors } = useTheme();
  const { scrollDirection } = useScroll();
  return (
    <>
      <ToastContainer />
      <Flex
        px={3}
        alignItems="center"
        backgroundColor={colors.darkGray}
        mb={1}
        {...props}
      >
        <Link variant="nav" href="/">
          <Box
            my={3}
            ml={[1, 4]}
            height="48px"
            width="48px"
            style={{ borderRadius: "50%", overflow: "hidden" }}
          >
            <Image height={48} width={48} src="/eagle_01.png" />
          </Box>
        </Link>
        <Text p={3} fontSize={22} fontWeight="bold" color={colors.primary}>
          Aggro Eagles
        </Text>
        <Box mx="auto" />
        <LinksContainer>
          <Link variant="nav" href="/#about" p={3}>
            About
          </Link>
          <Link variant="nav" href="/#eagles" p={3}>
            Eagles
          </Link>
          <Link variant="nav" href="#" p={3}>
            Eagleverse
          </Link>
          <Link variant="nav" href="/#roadmap" p={3}>
            Roadmap
          </Link>
          <Link variant="nav" href="/team" p={3}>
            Team
          </Link>
          <Link variant="nav" href="#faq" p={3}>
            Faqs
          </Link>
        </LinksContainer>
        <Box mx="auto" />
        <Box mr={[2, 4]} ml={(4, "auto")}>
          <LinkBase
            style={{ textDecoration: "none", color: "inherit" }}
            href="#"
          >
            <Twitter size="1.5rem" style={{ marginRight: "1rem" }} />
          </LinkBase>
          <LinkBase
            style={{ textDecoration: "none", color: "inherit" }}
            href="#"
          >
            <Discord size="1.5rem" style={{ marginRight: "1rem" }} />
          </LinkBase>
          <LinkBase
            style={{ textDecoration: "none", color: "inherit" }}
            href="#"
          >
            <Reddit size="1.5rem" />
          </LinkBase>
        </Box>
      </Flex>

      <BottomNav
        px={[3]}
        pb={[1]}
        pt={[2]}
        justifyContent="space-between"
        style={{ opacity: scrollDirection === "down" && isMobile ? 1 : 0 }}
      >
        <StyledLink variant="nav" href="/#about" py={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <BsInfoSquare size="1.5rem" />
            About
          </Flex>
        </StyledLink>
        <StyledLink variant="nav" href="/#eagles" py={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <GiEagleHead size="1.5rem" />
            Eagles
          </Flex>
        </StyledLink>
        <StyledLink variant="nav" href="/#roadmap" py={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <GiStonePath size="1.5rem" />
            Roadmap
          </Flex>
        </StyledLink>
        <StyledLink variant="nav" href="/team" py={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <RiTeamLine size="1.5rem" />
            Team
          </Flex>
        </StyledLink>
        <StyledLink
          variant="nav"
          href="/#fap"
          py={[1]}
          sx={{ boxShadow: "none" }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <FaRegQuestionCircle size="1.5rem" />
            Faqs
          </Flex>
        </StyledLink>
      </BottomNav>
    </>
  );
};

export default Header;
