import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties as ReactCSSProperties } from "react";

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    fontWeightBolder: ReactCSSProperties["fontWeight"];
  }
}

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1292px)": {
      fontSize: pxToRem(lg),
    },
  };
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1292,
    xl: 1536,
  },
};

export const typography: TypographyOptions = {
  fontFamily: "Garamond, serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  fontWeightBolder: 700,

  h1: {
    fontWeight: 600,
    lineHeight: 29 / 30,
    fontSize: pxToRem(30),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 27 / 22,
    fontSize: pxToRem(22),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 22 / 18,
    fontSize: pxToRem(18),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 18 / 15,
    fontSize: pxToRem(15),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 17 / 14,
    fontSize: pxToRem(14),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 15 / 12,
    fontSize: pxToRem(12),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 18 / 15,
    fontSize: pxToRem(15),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 17 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 17 / 18,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 15 / 18,
    fontSize: pxToRem(18),
  },
  caption: {
    fontWeight: 300,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
};
