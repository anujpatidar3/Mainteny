import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../CSS/authentication.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    toast.configure();

    const PostData = () => {
        if (!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast('Invalid Email', { position: toast.POSITION.TOP_RIGHT })
            return
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    toast(data.error,
                        { position: toast.POSITION.TOP_RIGHT })
                } else {
                    localStorage.setItem("jwt", JSON.stringify(data.token))
                    localStorage.setItem("user", JSON.stringify(data.user))
                    toast("Signed In Successfully",
                        { position: toast.POSITION.TOP_RIGHT })
                    navigate('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <Box sx={{ flexGrow: 1 }} className="signinpage">
            <Grid container spacing={{ xs: 0, sm: 2, md: 2 }}>
                <Grid item xs={12} sm={6} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <Paper elevation={8} className="signincard">
                        <h2 style={{ margin: "auto", marginTop: "20px" }}>Sign In</h2>
                        <TextField
                            style={{ width: "80%", marginLeft: "10%" }}
                            required
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            style={{ width: "80%", marginLeft: "10%" }}
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <CardActions className="buttons">
                            <Button
                                variant="contained"
                                onClick={() => PostData()}
                                style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                Sign In
                            </Button>
                        </CardActions>
                        <CardActions className="buttons">
                            <Button component={Link} to='/signup' size="small">New User?</Button>
                        </CardActions>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignIn;