import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./config/global/GlobalStyle";
import { AppRoutes } from "./config/routes/AppRoutes";
import { lightTheme } from "./config/themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
