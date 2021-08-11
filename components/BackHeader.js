import React from "react";
import { Flex, Heading, Box } from "rebass";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";

const BackHeader = ({ label, ...props }) => {
  const { colors } = useTheme();
  const router = useRouter();
  const handleBackClick = () => router.back();
  return (
    <Flex
      py={3}
      pl={[3]}
      alignItems="center"
      backgroundColor={colors.darkGray}
      mb={1}
      sx={{ cursor: "pointer" }}
      {...props}
    >
      <IoIosArrowBack size="36px" onClick={handleBackClick} />
      <Heading fontFamily="inherit" onClick={handleBackClick}>
        {label}
      </Heading>
    </Flex>
  );
};

export default BackHeader;
