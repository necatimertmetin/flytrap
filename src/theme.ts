// src/theme.ts
import { createTheme } from "@mui/material/styles";

const BASE_FONT_SIZE = 1.0;
const backgroundColor = "#e0e8e2"; // Açık Gri (background)

const theme = createTheme({
  palette: {
    primary: {
      main: "#467750", // Ana yeşil
    },
    secondary: {
      main: "#89c07e", // Açık yeşil
    },
    success: {
      main: "#467750", // Aynı ana yeşil, başarılı renk
    },
    error: {
      main: "#f0cd6e", // Sarı (biraz farklı bir tarzda error rengi istersen burayı kırmızı da yapabiliriz)
    },
    background: {
      paper: "#ffffff", // Kartlar, içerik arkası: beyaz
      default: backgroundColor, // Sayfa arkaplanı
    },
    text: {
      primary: "#000", // Koyu renk, ana yazılar
      secondary: "#000", // Yeşil tonlu ikincil yazılar
    },
  },
  typography: {
    fontFamily: '"Indie Flower", cursive',
    h1: { fontSize: `${BASE_FONT_SIZE * 3}rem` },
    h2: { fontSize: `${BASE_FONT_SIZE * 2.5}rem` },
    h3: { fontSize: `${BASE_FONT_SIZE * 2}rem` },
    h4: { fontSize: `${BASE_FONT_SIZE * 1.8}rem` },
    h5: { fontSize: `${BASE_FONT_SIZE * 1.5}rem` },
    h6: { fontSize: `${BASE_FONT_SIZE * 1.3}rem` },
    subtitle1: { fontSize: `${BASE_FONT_SIZE * 1.2}rem` },
    subtitle2: { fontSize: `${BASE_FONT_SIZE * 1.1}rem` },
    body1: { fontSize: `${BASE_FONT_SIZE * 1.2}rem` },
    body2: { fontSize: `${BASE_FONT_SIZE * 1}rem` },
    button: { fontSize: `${BASE_FONT_SIZE * 1.1}rem`, textTransform: "none" },
    caption: { fontSize: `${BASE_FONT_SIZE * 0.9}rem` },
    overline: { fontSize: `${BASE_FONT_SIZE * 0.8}rem` },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: backgroundColor,
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          fontFamily: '"Indie Flower", cursive',
        },
        html: {
          backgroundColor: backgroundColor,
          minHeight: "100%",
        },
      },
    },
  },
});

export default theme;
