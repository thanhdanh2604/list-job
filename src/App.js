import React from 'react'

import Home from './pages/Home.js';
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
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/job/:id' />
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App
