import { DefaultTheme } from "styled-components";

type TFontStyleItem = {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontStyles: { [key in keyof typeof themeFontStyles]: TFontStyleItem };
  }
}

const themeColors = {
  black: "#000",
  gray555: "#555",
  gray333: "#333",
  gray: "#2d3748",
  grayLight: "#dcdde1",
  white: "#ffffff",
  background: "#fff",
  green: "#07d962",
};

export const fontName = "Roboto";

const themeFontStyles = {
  paragraph: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: fontName,
  },
  heading: {
    fontSize: 32,
    fontWeight: 400,
    fontFamily: fontName,
  },
};

const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyles,
};

export default theme;
