import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image as RebassImage } from "rebass";
import styled, { useTheme } from "styled-components";
import Web3 from "web3";
import { isMobile } from "react-device-detect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";
import Image from "next/image";
import "intersection-observer";

import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Slider from "../components/Slider";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
import PostLaunch from "../components/PostLaunch";

const FloatingMetamask = styled.div`
  display: none;
  position: fixed;
  bottom: 160px;
  right: 50px;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  @media (min-width: 1024px) {
    display: block;
  }
`;
const FloatingWalletConnect = styled(FloatingMetamask)`
  bottom: 40px;
`;
const CustomHeading = styled(Heading)`
  text-align: left;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;
const walletConnKeyLS = "wallet_permission";

const BannerContainer = styled(Box)`
  position: relative;
  height: 550px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 700px;
    width: 1024px;
  }
`;

const MintWidget = styled(Box)`
  background-image: linear-gradient(rgb(43, 45, 53) 0%, rgb(23, 25, 33) 100%);
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Index = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [ethAddressWC, setEthAddressWC] = useState("");
  const { colors } = useTheme();

  const connectMetamask = async () => {
    console.log("connect metamask");
    if (window.ethereum) {
      window.metamaskWeb3 = new Web3(window.ethereum);
      try {
        const conn = await window.ethereum.enable();
        const ethconnected = conn.length > 0;
        if (ethconnected) {
          const address = conn[0]; // get wallet address
          console.log("Metamask extension found ,ethAddress =>> ", address);
        }
      } catch (err) {
        if (err.code === 4001)
          toast.error(
            "You've missed the boat, Please click on metamask icon to connect"
          );
        else if (err.code === -32002) {
          toast.info(
            "You'll find connection req when you click on Metamask extension"
          );
        } else {
          toast.error("Arrrg! Something went wrong");
        }
      }
      window.metamaskWeb3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) setEthAddress(ethAddresses[0]);
      });
    } else {
      toast.error("Please install Metamask extension and try again");
    }
  };

  const walletConnectInit = async () => {
    try {
      //  Create WalletConnect Provider
      const provider = new WalletConnectProvider({
        infuraId: "6b01117d96bd429bb6e34da9c8646ff2",
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      web3.eth
        .getAccounts()
        .then((ethAddresses) => {
          console.log(ethAddresses, "addressess");
          if (ethAddresses[0]) setEthAddressWC(ethAddresses[0]);
        })
        .catch((err) => {
          toast.error(err?.message || "Something went wrong");
        });
    } catch (err) {
      console.log(err);
    }

    // // Subscribe to accounts change
    // provider.on("accountsChanged", (accounts) => {
    //   console.log(accounts, "accountsChanged");
    // });

    // // Subscribe to chainId change
    // provider.on("chainChanged", (chainId) => {
    //   console.log(chainId, "chainChanged");
    // });

    // // Subscribe to session disconnection
    // provider.on("disconnect", (code, reason) => {
    //   console.log(code, reason, "disconnect");
    // });

    // provider
    //   .request({ method: "eth_accounts" })
    //   .then((accounts) => console.log(accounts))
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    const isWalletPermission = localStorage.getItem(walletConnKeyLS) === "true";
    if (isWalletPermission || isMobile) connectMetamask();
    // cleanup
    return () => {
      window.web3 = undefined;
    };
  }, []);

  const handleMetamaskConnect = () => {
    localStorage.setItem(walletConnKeyLS, "true");
    connectMetamask();
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
          <BannerContainer mb={[2, 4]}>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              src="/banner_02.gif"
              alt="banner"
              quality="70"
            />
          </BannerContainer>
          <Heading
            textAlign={["left", "center"]}
            fontSize={[5, 6]}
            fontFamily="inherit"
            sx={{
              color: "primary",
            }}
            px={2}
          >
            10k adventurous hearts that strive for excellence in whatever fields
            they chose
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
        {/* <Box mb={[5, 7]} id="mint">
          <Heading
            fontSize={[6, 7]}
            fontFamily="inherit"
            mb={[2, 4]}
            ml={[2, 0]}
          >
            Want a mint ?
          </Heading>
          <MintWidget p={[3]} mx={[2, 0]}>
            <Text fontSize={[2, 3]} fontFamily="inherit" mb={[4]}>
              It only takes one mint to remove bad breath eh.
            </Text>
            <Box my={[1]}>
              <Label htmlFor="mint_amount">Amount</Label>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgb(143, 143, 143)",
                fontSize: [2, 3],
              }}
              mb={[4]}
            >
              <Input
                id="mint_amount"
                name="amount"
                type="number"
                placeholder="You want our entire stock ?"
                style={{ width: "100%" }}
              />
            </Box>
            <Flex justifyContent="flex-end">
              <Button variant="outline">Mint now!</Button>
            </Flex>
          </MintWidget>
        </Box> */}
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
        <Box mb={[5, 7]} id="post-launch">
          <Heading fontSize={[6, 7]} px={2} fontFamily="inherit" mb={[2, 4]}>
            Post Launch
          </Heading>
          <Box px={2}>
            <PostLaunch />
          </Box>
        </Box>
        <FloatingMetamask onClick={handleMetamaskConnect}>
          <Box
            sx={{ borderRadius: "50%", overflow: "hidden" }}
            height="64px"
            width="64px"
          >
            <Image
              quality="60"
              src="https://i.ibb.co/h961JXz/metamask-round.png"
              alt="metamask-round"
              height="64px"
              width="64px"
            />
          </Box>
          <Text color={ethAddress ? colors.primary : colors.offWhite}>
            {ethAddress ? "Connected" : "Connect"}
          </Text>
        </FloatingMetamask>
        <FloatingWalletConnect onClick={walletConnectInit}>
          <Box
            sx={{ borderRadius: "50%", overflow: "hidden" }}
            height="64px"
            width="64px"
          >
            <Image
              quality="60"
              src="https://i.ibb.co/Kxw8gSZ/wallet-connect.png"
              alt="wallet-connect"
              height="64px"
              width="64px"
            />
          </Box>
          <Text color={ethAddressWC ? colors.primary : colors.offWhite}>
            {ethAddressWC ? "Connected" : "Connect"}
          </Text>
        </FloatingWalletConnect>
      </Box>
    </>
  );
};

export default Index;
