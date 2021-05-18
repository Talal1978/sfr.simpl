import React, {useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import '../css/pages/loginPage.css';
import {selectUserDetails, selectUserToken, setUserLoginDetails, setSignOutState} from '../redux/slicers/userSlice';
import { Grid, Paper, FormControlLabel, Checkbox, Button, Typography, InputBase} from '@material-ui/core';
import logoOff from '../images/logoliyas.png';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const LoginPage = () => {

    const dispatch = useDispatch();
    const userDetails = useSelector(selectUserDetails);
    const token = useSelector(selectUserToken);

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }))
      }

    const connexionUser = () =>{
        axios.post("http://admin.simpl.local:8000/api/auth/login", {
        email : username,
        password : password,
        }).then( res => {
          setUser(res.data) 
        //   ca va devenir setUser(res)
          if (userDetails !== null) {
            history.push('/home');
           }
        }).catch(err => alert(err.message));
      }

    const logStaStyle={padding: 20, height:'30%', maxWidth:400 , margin:"20px auto" , backgroundColor: '#fff'}
    const btnStyle={margin: '8px 0', backgroundColor: '#ff9800', color: '#fff'}
    const checkboxStyle={margin: '8px 0', color: '#ff9800' }
    const marginThis={margin: '8px 0'}
    const centerThis={textAlign: 'center',fontFamily: 'Ubuntu'}
    const fontChange={fontFamily: 'Ubuntu', color: '#0072e4'}

    const submitedForm = (e) => {
        e.preventDefault();
    }

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <div className="toolbar" />
            <Paper elevation={10} style={logStaStyle}>
                <Grid align='center'>
                     <img src={logoOff} />
                     <h2 style={fontChange}>
                     Version web 
                    </h2>
                </Grid>
             <form onSubmit={submitedForm}>
                <InputBase id="1" placeholder="Email ou Username" variant="outlined" className="inputBase" fullWidth required onChange={updateUsername}/>
                <InputBase id="2" placeholder="Mot de passe" variant="outlined" className="inputBase" type='password' fullWidth required onChange={updatePassword}/>
                <FormControlLabel style={marginThis}
                       control={
                           <Checkbox style={checkboxStyle}
                             name="checkedB"
                             color="primary"
                           />
                         }
                         label="Se rappeler de moi"
                   />
                   <Button type='submit' variant="outlined" style={btnStyle} onClick={() => connexionUser()} fullWidth>Se Connecter</Button>
              </form>
            </Paper>
            <Typography style={centerThis}>
                   solution de gestion et de préparation des liasses comptables et fiscales, conformèment au éxigences.
            </Typography>
        </Grid>
    )
}

export default LoginPage;