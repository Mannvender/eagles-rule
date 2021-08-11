import { Card, Box } from "rebass";
import { useTheme } from "styled-components";
import Badge from "../Badge";
import {
  Launch,
  CustomTraits,
  Olympics,
  Signature,
  Efc,
  Advice,
  Giveaway,
} from "./desktop";

const Timeline = () => {
  const { colors } = useTheme();
  return (
    <>
      <Badge bgColor={colors.accent1}>0%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Launch />
      </Card>
      <Badge bgColor={colors.accent1}>10%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <CustomTraits />
      </Card>
      <Badge bgColor={colors.accent1}>23%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Olympics />
      </Card>
      <Badge bgColor={colors.accent1}>36%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Signature />
      </Card>
      <Badge bgColor={colors.accent1}>47%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Efc />
      </Card>
      <Badge bgColor={colors.accent1}>69% Nice</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Advice />
      </Card>
      <Badge bgColor={colors.accent1}>100%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Giveaway />
      </Card>
    </>
  );
};

export default Timeline;
