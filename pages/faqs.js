import React, { useState } from "react";
import { Box, Heading, Text, Flex, Link as LinkRebass } from "rebass";
import styled, { useTheme } from "styled-components";

import BackHeader from "../components/BackHeader";
import { StyledBox } from "../components/MintWidget";
import SearchInput from "../components/SearchInput";
import Badge from "../components/Badge";
import { Link as LinkBase } from "../components/Header";

const TagContainer = styled(Box)`
  border-bottom: 1px solid #3d3d3d;
`;
const QuestionContainer = styled(Flex)`
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;
const Link = styled(LinkBase)`
  &:hover {
    color: gray;
  }
`;
export const TAGS = ["Minting", "Roadmap", "Technical"];
export const FAQS = [
  {
    id: "1",
    ques: "What are Aggroeagles?",
    ans: `AggroEagles is a unique NFT collection of 10,000 eagles living on the Ethereum blockchain.
     Ownership includes access to 100 Eth giveaways/contests, real-world benefits, and complete commercial rights to your eagle.`,
    tags: ["Technical"],
  },
  {
    id: "2",
    ques: "How much is project membership cost?",
    ans: `
    No FOMO ramps or bonding curves here. All eagles will be sold at 0.036 ETH + gas.
     Membership is granted for as long as you hold your eagles. You can still join the project by purchasing on the secondary market
     `,
    tags: ["Minting"],
  },
  {
    id: "3",
    ques: "What are signed eagles?",
    ans: `
     `,
    tags: ["Roadmap", "Minting"],
  },
  {
    id: "4",
    ques: "What are eaglympics?",
    ans: `
     `,
    tags: ["Roadmap"],
  },
  {
    id: "5",
    ques: "What is EFC and when will it happed?",
    ans: `
     `,
    tags: ["Roadmap"],
  },
  {
    id: "6",
    ques: "What is Eagle StreetBets?",
    ans: `
     `,
    tags: ["Roadmap"],
  },
  {
    id: "7",
    ques: "How were the eagles generated?",
    ans: `
     `,
    tags: ["Technical"],
  },
  {
    id: "8",
    ques: "What about 100ETH giveaway?",
    ans: `
     `,
    tags: ["Roadmap"],
  },
  {
    id: "9",
    ques: "What about the boring technical details?",
    ans: `
    Doggos are stored as ERC-721 NFT tokens on the Ethereum blockchain within our own verified custom smart contract (0x6F...8A26).
     The artwork itself is stored on IPFS and we plan to eternalize this on the permaweb via Arweave once all 8,000 doggos have been adopted.
     `,
    tags: ["Roadmap"],
  },
];
const Faqs = () => {
  const { colors } = useTheme();
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleTagClick = (tag) => {
    if (tag === category) setCategory("");
    else setCategory(tag);
  };
  const handleSearchInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  return (
    <>
      <BackHeader label="FAQs" />
      <Box
        sx={{
          maxWidth: 1024,
          mx: "auto",
          px: 0,
          pt: [4],
        }}
      >
        <StyledBox>
          <Heading
            textAlign={["center"]}
            fontSize={[2, 3]}
            fontFamily="inherit"
            my={[2]}
          >
            Here to help
          </Heading>
          <Text textAlign={["center"]} mb={[3]} fontWeight={[300]}>
            Find answers to your questions. It’s all here. Happy exploring!
          </Text>
        </StyledBox>
        <SearchInput
          placeholder="Ask us anything"
          style={{ fontWeight: 300 }}
          onChange={handleSearchInputChange}
          value={query}
        />
        <TagContainer mb={[4]}>
          <Heading fontSize={[2, 3]} fontFamily="inherit" my={[2]}>
            Find FAQs on
          </Heading>
          <Flex mb={[3]}>
            {TAGS.map((tag, i) => (
              <Badge
                bgColor={category === tag ? colors.accent1 : colors.darkGray}
                border={`solid 1px ${
                  category === tag ? colors.accent1 : "#3d3d3d"
                }`}
                cursor="pointer"
                mr={[3]}
                key={i}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </Flex>
        </TagContainer>
        <Heading fontSize={[2, 3]} fontFamily="inherit" mt={[2]} mb={[3]}>
          Popular Questions
        </Heading>
        <QuestionContainer px={[4]} py={[2]} flexDirection="column" mb={[5]}>
          {FAQS.filter((faq) =>
            faq.ques.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          )
            .filter((faq) => faq.tags.includes(category) || !category)
            .map((faq) => (
              <Link href={"/faq/" + faq.id} key={faq.id} mb={[2]}>
                {faq.ques}
              </Link>
            ))}
        </QuestionContainer>
        <Text color="darkGray" textAlign="center">
          Can’t find what you need? Get in touch with us.
        </Text>
        <Box mt={[2]} mb={[4]} textAlign="center">
          <LinkRebass
            href="https://twitter.com/aggro_eagles"
            target="__blank"
            mx={[2]}
            style={{ textDecoration: "underlined", color: "inherit" }}
          >
            Tweet/DM
          </LinkRebass>
          <LinkRebass
            href="https://discord.com/invite/58rXZCBa26"
            target="__blank"
            mx={[2]}
            style={{ textDecoration: "underlined", color: "inherit" }}
          >
            Join Discord
          </LinkRebass>
        </Box>
      </Box>
    </>
  );
};

export default Faqs;
