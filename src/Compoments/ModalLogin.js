import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useContext } from 'react';
import {pageContext } from '../pages/Home';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpenLogin = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);
  const {isLogging,setlogging,callBackFunction} = useContext(pageContext);
  const [username] = useState("usename");
  const [password] = useState("123");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    handleCloseLogin();
    setlogging(true);
  };
  return (
    <div>
      <Button onClick={handleOpenLogin}>Login</Button>
      <Modal
        open={open}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <TextField
        disabled
        label="Username"
        default="user"
        value={username}
        sx={{ m: 1 }}
      />
      
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        
        <OutlinedInput
          disabled
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      
        <Button
        onClick={handleLogin}
        sx={{ m: 1, width: "10ch" }}
        variant="contained"
        >
          Login
        </Button>
      
      
    </Box>
      </Modal>
    </div>
  );
}