import {
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { palette } from "./mui/palette";
import { breakpoints, typography } from "./mui/theme";

function App() {
  const theme = createTheme({ palette, typography, breakpoints });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"xs"}>
        <Typography mb={4} variant="h1">
          Регистрация
        </Typography>
        <RegisterForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
