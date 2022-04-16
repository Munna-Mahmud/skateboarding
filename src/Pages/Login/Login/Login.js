import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import login from '../../../assets/login/undraw_mobile_payments_re_7udl.svg'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const [isLoading] = useState(false);
    const { user, loginUser,  signInWithGoogle, authError } = useAuth()
    const [ setAuthError] = useState('');

    const location = useLocation();
    const history = useHistory();
const redirect_uri =location.state?.from || '/home'

    const handleOnChanged = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();

        alert('Login successfully')

        return
    }

    const googleHandeler = () => {
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_uri)
            const user = result.user;
        }).catch((error) => {
            setAuthError(error.message);
        })

    }
    return (
        <Container className="mt-5 pt-5">
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4"  gutterBottom> Login </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChanged}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChanged}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                    <p>------------Or---------------</p>
                    <Button onClick={googleHandeler} variant="contained">Sign In Google</Button>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
