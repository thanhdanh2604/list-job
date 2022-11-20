import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import ModalLogin from '../Compoments/ModalLogin';
import { pageContext } from '../pages/Home';

export default function SearchAppBar() {
  const {isLogging,setlogging} = React.useContext(pageContext);
  const {userName} = React.useContext(pageContext);
  const handleSignOut = ()=>{
    setlogging(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#4a5060bd'}}>
        <Container>
          <Toolbar sx="">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Job Routing
            </Typography>
            
            {isLogging===true? <><h4>Wellcome {userName} !</h4> <Button onClick={handleSignOut}>Sign Out</Button></>:<ModalLogin />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
