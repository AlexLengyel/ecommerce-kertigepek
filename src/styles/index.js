import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        font-size: 16px;
        font-family: 'Noto Sans Display', sans-serif;
        font-weight: normal;
        box-sizing: border-box;   
    }
    body {
        background-color: white;
    }
`;

export const defaultTheme = {
  primaryGreenColor: "#a2e072",
  selectingGreen: "#8cc263",
  mainGray: "#ebebeb",
  secondaryGray: "#878787",
  mainBlack: "#404040",

  fontSizeTitle: "60px",
  fontSizeXXL: "22px",
  fontSizeXL: "20px",
  fontSizeL: "18px",
  fontSizeM: "16px",
  fontSizeS: "14px",
  fontSizeXS: "12px",

  navbarHeight: "60px",

  cardBoxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  navBarBoxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
};
