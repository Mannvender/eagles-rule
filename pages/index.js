import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Web3 from "web3";
import { isMobile } from "react-device-detect";

import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Slider from "../components/Slider";

const FloatingMetamask = styled.div`
  display: none;
  position: fixed;
  bottom: 70px;
  right: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  @media (min-width: 1024px) {
    display: block;
  }
`;
const CustomHeading = styled(Heading)`
  text-align: left;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;
const walletConnKeyLS = "wallet_permission";

const Index = () => {
  const [ethAddress, setEthAddress] = useState("");
  const { colors } = useTheme();

  const connectWallet = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const conn = await window.ethereum.enable();
      const ethconnected = conn.length > 0;
      if (ethconnected) {
        const address = conn[0]; // get wallet address
        console.log("Metamask extension found ,ethAddress =>> ", address);
      }
      window.web3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) setEthAddress(ethAddresses[0]);
      });
    } else {
      alert("Please install metamask browser extension and try again.");
    }
  };

  useEffect(() => {
    const isWalletPermission = localStorage.getItem(walletConnKeyLS) === "true";
    if (isWalletPermission || isMobile) connectWallet();
    // cleanup
    return () => {
      window.web3 = undefined;
    };
  }, []);

  const handleWalletConnect = () => {
    localStorage.setItem(walletConnKeyLS, "true");
    connectWallet();
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: 1024,
          mx: "auto",
          px: 0,
        }}
      >
        <Box mb={[5, 7]}>
          <Image
            height="600px"
            width="1024px"
            src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/minutae.gif"
            sx={{
              borderRadius: 0,
              objectFit: "cover",
              objectPosition: "50% 30%",
            }}
            mb={[2, 4]}
          />
          <Heading
            textAlign={["left", "center"]}
            fontSize={[5, 6]}
            fontFamily="inherit"
            sx={{
              color: "primary",
            }}
            px={2}
          >
            3600 adventurous hearts that strive for excellence in whatever
            fields they chose
          </Heading>
        </Box>
        <Box mb={[5, 7]} id="eagles">
          <Heading
            fontSize={[6, 7]}
            fontFamily="inherit"
            mb={[2, 4]}
            ml={[2, 0]}
          >
            Eagles
          </Heading>
          <Slider />
        </Box>
        <Box mb={[5, 7]} id="roadmap">
          <CustomHeading
            fontSize={[6, 7]}
            px={2}
            fontFamily="inherit"
            mb={[2, 4]}
          >
            Roadmap
          </CustomHeading>
          <Box px={2}>
            <Timeline />
          </Box>
        </Box>
        <FloatingMetamask onClick={handleWalletConnect}>
          <Image
            src="https://i.ibb.co/h961JXz/metamask-round.png"
            alt="metamask-round"
            height="4rem"
            width="4rem"
            sx={{ borderRadius: "50%" }}
          />
          <Text color={ethAddress ? colors.primary : colors.offWhite}>
            {ethAddress ? "Connected" : "Connect"}
          </Text>
        </FloatingMetamask>
      </Box>
    </>
  );
};

export default Index;
