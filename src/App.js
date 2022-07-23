import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Index from './router/Index';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#2e3143',
      },
      secondary: {
        main: '#7cb3bd',
        white: '#FFFFFF',
        grey: '#b3bbc5',
        black: '#282c37'
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Index />
      </ThemeProvider>
    </div>
  );
}

export default App;
