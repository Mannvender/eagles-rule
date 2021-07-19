import { Box, Heading, Text, Image as RebassImage, Flex, Card } from "rebass";
import Image from "next/image";

const PostLaunch = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        mx={[2]}
        mb={[5, 7]}
        flexWrap={["wrap"]}
      >
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[3]}
          mb={[4]}
        >
          <Box
            height="500px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/studio.jpg"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            Eagle studio
          </Text>
        </Card>
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[3]}
          mb={[4]}
        >
          <Box
            height="500px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/editor.jpg"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            IP development
          </Text>
        </Card>
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[3]}
          mb={[4]}
        >
          <Box
            height="500px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/walk_of_fame.jpg"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            NFThodlers have a chance to star in developed projects
          </Text>
        </Card>
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[3]}
          mb={[4]}
        >
          <Box
            height="500px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/marvel.jpg"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            NFT serves as ticket to future IP projects & is a marketed
            collectible
          </Text>
        </Card>
      </Flex>
    </>
  );
};

export default PostLaunch;
