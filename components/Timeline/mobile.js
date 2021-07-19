import { Card, Box } from "rebass";
import { useTheme } from "styled-components";
import {
  Launch,
  CustomTraits,
  Olympics,
  Signature,
  Efc,
  Advice,
  Giveaway,
} from "./desktop";

const Badge = ({ children }) => {
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        display: "inline-block",
        color: "white",
        bg: colors.accent1,
        px: 3,
        py: 1,
        borderRadius: 9999,
        fontSize: 2,
        my: 2,
      }}
    >
      {children}
    </Box>
  );
};

const Timeline = () => {
  const { colors } = useTheme();
  return (
    <>
      <Badge>0%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Launch />
      </Card>
      <Badge>10%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <CustomTraits />
      </Card>
      <Badge>23%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Olympics />
      </Card>
      <Badge>36%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Signature />
      </Card>
      <Badge>47%</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Efc />
      </Card>
      <Badge>69% Nice</Badge>
      <Card
        sx={{ backgroundColor: colors.darkGray, borderRadius: "8px" }}
        mb={[3]}
      >
        <Advice />
      </Card>
      <Badge>100%</Badge>
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
