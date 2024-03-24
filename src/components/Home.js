import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { userLogout } from "../actions/authentication"
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Home(props){
  const navigate = useNavigate();
  const [name, setName] = useState("");


  useEffect(()=>{
    setName(props.userName)
    if(!props.userName)
      navigate('/');
  }, [])

  return(
    <>
    <div className='home-div'>
      <Typography style={{textAlign:'center'}} variant="h3" component="h3">
        Thank You!!
      </Typography>
      <Typography style={{textAlign:'center'}} variant="h1" component="h1">
        {name}
      </Typography>
        <button className='home-btn' onClick={()=>{ props.userLogout()
          navigate('/')
        }}>
          Logout
        </button>
      </div>
    </>
  )
}
const mapStateToProps = state => state.profile;

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);