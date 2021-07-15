import styled, { useTheme } from "styled-components";
import { Heading, Text } from "rebass";
import { GrLaunch } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { GiPunchBlast, GiBroom, GiPartyPopper } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { isBrowser, isMobile } from "react-device-detect";

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
        date="March 2021"
        iconStyle={{ background: colors.accent1 }}
        icon={<GrLaunch />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isBrowser ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Launch
        </Heading>
        <Text fontSize={isBrowser ? "1.2rem" : "1rem"}>
          The Dogs Unchained sale will take place here on our website. We'll
          announce a date, time, & price soon!
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<FaAward />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isBrowser ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Charity
        </Heading>
        <Text fontSize={isBrowser ? "1.2rem" : "1rem"}>
          Have higher odds at rare traits when you elect to donate .01 ETH to
          charity at mint. We'll match your donation. Let's help some dogs!
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<MdLocalMovies />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isBrowser ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Eagles movie
        </Heading>
        <Text fontSize={isBrowser ? "1.2rem" : "1rem"}>
          We're building a dog park in the metaverse where you can memorialize
          your IRL dog FOREVER.
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiBroom />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isBrowser ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Floor Sweeping & Charity
        </Heading>
        <Text fontSize={isBrowser ? "1.2rem" : "1rem"}>
          25% of secondary royalties will go toward sweeping and burning the
          floor. The other 25% will go to charity. Let's help more dogs!
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: colors.accent1,
          borderRadius: 8,
        }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors.accent1}` }}
        date="Soon"
        iconStyle={{ background: colors.darkGray }}
        icon={<GiPunchBlast />}
      >
        <Heading
          fontFamily="inherit"
          style={{
            color: colors.offWhite,
            fontSize: isBrowser ? "2rem" : "1.5rem",
          }}
          mb={[2, 3]}
        >
          Boom Boom Room
        </Heading>
        <Text fontSize={isBrowser ? "1.2rem" : "1rem"}>
          Combine traits of your dogs on the blockchain. Dogs Unchained owners
          will collectively decide the future of what this project looks like.
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
