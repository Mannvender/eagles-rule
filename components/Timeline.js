import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Heading, Box, Text } from "rebass";
import { FaAward, FaRocket, FaHandsHelping, FaDonate } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import {
  GiPunchBlast,
  GiBroom,
  GiPartyPopper,
  GiSoccerBall,
} from "react-icons/gi";
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
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaRocket />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isDesktop ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Launch
        </Heading>
        <Text fontSize={isDesktop ? "1.2rem" : "1rem"}>
          The AggroEagles sale will take place here on our website. We'll
          announce a date, time, & price soon!
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="23%"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiSoccerBall />}
      >
        <Box
          height="280px"
          sx={{
            position: "relative",
            borderRadius: "8px",
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
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="47%"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiPunchBlast />}
      >
        <Box
          height="280px"
          sx={{
            position: "relative",
            borderRadius: "8px",
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
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="69% NICE"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaHandsHelping />}
      >
        <Box
          height="560px"
          sx={{
            position: "relative",
            borderRadius: "8px",
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
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="100% (Contest will start at about 36%)"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaDonate />}
      >
        <Box
          height="250px"
          sx={{
            position: "relative",
            borderRadius: "8px",
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
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: colors.darkGray, color: "#fff" }}
        icon={<GiPartyPopper />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
