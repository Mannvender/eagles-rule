import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Heading, Box, Text } from "rebass";
import {
  FaUserEdit,
  FaRocket,
  FaHandsHelping,
  FaDonate,
  FaSignature,
} from "react-icons/fa";
import { GiPunchBlast, GiPartyPopper, GiSoccerBall } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { isDesktop, isMobile } from "react-device-detect";

const Timeline = () => {
  const { colors } = useTheme();
  return (
    <VerticalTimeline animate={isMobile ? false : true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaRocket />}
      >
        <Box p={[2, 3]}>
          <Heading
            fontFamily="inherit"
            style={{
              color: colors.offWhite,
              fontSize: isDesktop ? "2rem" : "1.5rem",
            }}
            mb={[2]}
          >
            Launch
          </Heading>
          <Text fontSize={[3]}>
            The AggroEagles sale will take place here on our website. We'll
            announce a date, time, & price soon!
          </Text>
        </Box>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="10%"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaUserEdit />}
      >
        <Box
          height="280px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/traits_eagle.gif"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          36 NFT owners get to add custom traits to their eagles
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="23%"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiSoccerBall />}
      >
        <Box
          height="280px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/eaglympics.png"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          Let the games begin
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="36%"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaSignature />}
      >
        <Box
          height="390px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/sign_nft.png"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          360 owners get to sign their NFTs
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="47%"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiPunchBlast />}
      >
        <Box
          height="280px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/efc.png"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          EFC fight championship
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="69% NICE"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaHandsHelping />}
      >
        <Box
          height="560px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/eagle_wallstreet.png"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          Want your folio to fly to the moon – we’ll help you crashland there
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.darkGray,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.darkGray}` }}
        date="100%"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaDonate />}
      >
        <Box
          height="250px"
          sx={{
            position: "relative",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            src="/giveaway.png"
          />
        </Box>
        <Text fontSize={[3]} p={[3]}>
          100ETH – charity begins at home – contest details at 50%
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: colors.darkGray, color: "#fff" }}
        icon={<GiPartyPopper />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
