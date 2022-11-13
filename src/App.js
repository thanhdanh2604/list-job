import React from 'react'
import AppBar from './Compoments/AppBar.js';
import Home from './pages/Home.js';
import Details from './pages/Details.js';
import { Route, Routes } from 'react-router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({ 
  palette: {
  mode: 'dark',
},})
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div >
          <AppBar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/job/:id' element={<Details/>} />
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App
