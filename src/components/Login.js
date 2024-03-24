import React, { useState, useEffect } from 'react';
import { Box , Typography, TextField, Button, Avatar, Grid, Link, Snackbar, Alert} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux"
import { userLogin } from "../actions/authentication"
import '../styles/styles.css'

function Login(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    open: false,
    message: ''
  });

  useEffect(()=>{
    // console.log(props)
  }, [])
  
  const handleClose = () => {
    setErrorMessage(false);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Validate email and password
      if (userData && userData.length && userData.find(obj=>obj.email === email)) {
        const user = userData.find(obj=>obj.email === email)
        // console.log(user, userData)

        if(user.password === password){
          props.userLogin({email: user.email, userName: user.userName})
          navigate('/home')
        } else {
          setErrorMessage({ message: 'Invalid credentials !!!', open: true });
        }
      } else {
        setErrorMessage({ message: "User doesn't exist.. Please Register yourself by clickng above link !!!", open: true });
      }
    } else {
      setErrorMessage({ message: "User doesn't exist.. Please Register yourself by clickng above link !!!", open: true });
    }
  };
  return(
    <>
    <div className='Signin-div1'>
      <div className='Signin-div2'>
          <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
      </div>
      <Typography 
              component="h1" 
              style={{textAlign:'center'}} 
              variant="h5"
              >
              Sign in
      </Typography>
      <Box>
          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              type="submit"
              fullWidth
              variant="contained"
              disabled = {!email || !password}
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
            Sign In
          </Button>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
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

const mapStateToProps = state => state.profile;

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (props) => dispatch(userLogin(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);