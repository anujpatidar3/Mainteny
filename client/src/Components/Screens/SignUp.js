import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../CSS/authentication.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    toast.configure();

    const PostData = () => {
        if (!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast('Invalid Email', { position: toast.POSITION.TOP_RIGHT })
            return
        }
        fetch("/signup", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    toast(data.error,
                        { position: toast.POSITION.TOP_RIGHT })
                } else {
                    console.log(data.message)
                    toast(data.message,
                        { position: toast.POSITION.TOP_RIGHT })
                    navigate('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <Box component="form" sx={{ flexGrow: 1 }} className="signinpage">
            <Grid container columnSpacing={{ xs: 0, sm: 2, md: 1 }}>
            <Grid item xs={12} sm={6} md={6} style={{fontWeight:"600",fontSize:"16px",fontFamily: "Lucida Console, Courier New, monospace"}}>
                    University Admin is a web application to help university admin’s maintain the data of students. The Admin has to create a User Profile then that user can add students with the subjects the student has opted to study. Then the Admin can later on see the list of students with the subjects he/she has chosen.
                    <br />The Admin can edit the subjects in future too or delete a student’s data in case any student opts to drop out or change the subjects. The Web Application provides authentication and privacy capabilities to the user. All data of the user will be stored in an online database and will be protected so that no user without proper credentials can access it.
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <Paper elevation={8} className="signincard">
                        {/* <Item> */}
                        <h2 style={{ margin: "auto", marginTop: "20px" }}>Sign Up</h2>
                        <TextField
                            style={{ width: "80%", marginLeft: "10%" }}
                            required
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            style={{ width: "80%", marginLeft: "10%" }}
                            required
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            style={{ width: "80%", marginLeft: "10%" }}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <CardActions className="buttons">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "#000046", marginTop: "10px" }}
                                onClick={() => PostData()}
                            >
                                Sign Up
                            </Button>
                        </CardActions>
                        <CardActions className="buttons">
                            <Button component={Link} to='/signin' size="small">Already Have an Account?</Button>
                        </CardActions>
                        {/* </Item> */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;

