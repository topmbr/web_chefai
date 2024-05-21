import React from 'react';
import RecipeForm from './components/RecipeForm';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ffb94d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <RecipeForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
