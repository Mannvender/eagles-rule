import { Box, Heading, Card, Image, Text, Flex } from "rebass";
import Header from "../components/Header";

const Team = () => {
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
        <Heading fontSize={[6, 7]} fontFamily="inherit" my={[2, 4]} ml={[2, 0]}>
          Gang Gang
        </Heading>
        <Flex
          justifyContent="center"
          mx={[2]}
          mb={[5, 7]}
          flexWrap={["wrap", "nowrap"]}
        >
          <Card
            width={[1, 1 / 2]}
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: 16,
            }}
            mr={[0, 4]}
            mb={[3, 0]}
          >
            <Image
              src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/12testinghmmm7-1024x1024.png"
              sx={{
                borderRadius: "16px 16px 0 0",
              }}
            />
            <Box p={[3]}>
              <Heading fontFamily="inherit" fontSize={[4, 5]} mb={[3]}>
                Nids
              </Heading>
              <Text fontSize={[2, 3]}>
                The art house, fashionista, bad skater, brilliant scientist,
                loves ice creams, has an eye for colors & another for details
              </Text>
            </Box>
          </Card>
          <Card
            width={[1, 1 / 2]}
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: 16,
            }}
          >
            <Image
              src="http://www.skyhigheagleskool.club/wp-content/uploads/2021/07/12testinghmmm7-1024x1024.png"
              sx={{
                borderRadius: "16px 16px 0 0",
              }}
            />
            <Box p={[3]}>
              <Heading fontFamily="inherit" fontSize={[4, 5]} mb={[3]}>
                Nids
              </Heading>
              <Text fontSize={[2, 3]}>
                The art house, fashionista, bad skater, brilliant scientist,
                loves ice creams, has an eye for colors & another for details
              </Text>
            </Box>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default Team;
