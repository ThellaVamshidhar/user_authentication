import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box , Typography, TextField, Button, Avatar, Grid, Link, Snackbar, Alert} from '@mui/material/';
import '../styles/styles.css';



function Signup(){
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({
      open: false,
      message: ''
    });


    const handleClose = () => {
      setErrorMessage(false);
    };

    const handleSubmit = () => {
        const userData = {
            email: email,
            password: password,
            userName: userName
        }
        var users = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"));
        if(users == null) users = []
        ;
        console.log(users)
        if(users && users.length  &&users.findIndex(obj=>obj.email === email) > -1) {
          setErrorMessage({ message: 'User already registered', open: true }); 
          setEmail('');
          setUserName('');
          setPassword('');
        }  else {
          users.push(userData)
          localStorage.setItem('userData', JSON.stringify(users));
          setErrorMessage({ message: 'User registered successfully', open: true }); 
          setEmail('');
          setUserName('');
          setPassword('');
        }    
    }

    return(
        <>
        <div className='Signup-div1'>
          <div className='Signup-div2'>
            <Avatar  sx={{ m: 2, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <Typography 
                  component="h1" 
                  className='Signup-typo'  
                  variant="h5"
                  >
                  Sign up
          </Typography>
          <Box> 
          <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoFocus
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
          <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
          <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
          <Button
                  disabled={!email || !password || !userName}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                Sign Up
          </Button>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already have an account? Sigin"}
              </Link>
            </Grid>
          </Box>  
        </div>
        <Snackbar open={errorMessage.open} anchorOrigin={{vertical: "bottom", horizontal: "center"}} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {errorMessage.message}      
        </Alert>
    </Snackbar>
        </>
      )
}
export default Signup;