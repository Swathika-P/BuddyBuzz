import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/mynthraad.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mynthra</Typography>
        <Typography color={medium}>mythra.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
         Unveil your unique style with fashion that dazzles. Our designs promise to make you look and feel effortlessly stunning.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
