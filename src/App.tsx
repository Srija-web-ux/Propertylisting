import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PropertyList from './components/PropertyList';

import backgroundImage from './background.jpg'; // Import the background image
import logo from './housefulgroup_logo.jpg';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust primary color as needed
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change default font family
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Apply background image dynamically
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column', // Ensures header is at the top
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background color
        }}
      >
               <header style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px 0', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, textAlign: 'center', fontSize: '2.5rem', fontWeight: 'Bold', color: 'rgb(233 233 109)' }}>
              Houseful
             
              <span  style={{ fontSize: '0.9rem',textAlign: 'end'}}>........Find your perfect home</span>
              
            </h1>
            <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
          </Container>
        </header>
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PropertyList />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
