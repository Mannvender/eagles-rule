import { isMobile } from "react-device-detect";
import DesktopVersion from "./desktop";
import MobileVersion from "./mobile";

const Timeline = () => {
  return isMobile ? <MobileVersion /> : <DesktopVersion />;
};

export default Timeline;
