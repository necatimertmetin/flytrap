import { Controller } from "./components/pages/Controller";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <style>{`html{background-color: ${theme.palette.background.default}}`}</style>
      <Controller />
    </ThemeProvider>
  );
}

export default App;
