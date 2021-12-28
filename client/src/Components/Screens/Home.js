import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="signinpage">
            <Grid container spacing={{ xs: 0, sm: 2, md: 2 }}>
                <Grid item xs={12} sm={6} md={6} style={{fontWeight:"600",fontSize:"16px",fontFamily: "Lucida Console, Courier New, monospace"}}>
                    University Admin is a web application to help university admin’s maintain the data of students. The Admin has to create a User Profile then that user can add students with the subjects the student has opted to study. Then the Admin can later on see the list of students with the subjects he/she has chosen from My Students button on the home page or from the Navigation bar at the top.
                    <br />The Admin can edit the subjects in future too or delete a student’s data in case any student opts to drop out or change the subjects. The Web Application provides authentication and privacy capabilities to the user. All data of the user will be stored in an online database and will be protected so that no user without proper credentials can access it.
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <Paper elevation={8} className="signincard">
                        <Item>
                            <CardActions className="buttons">
                                <Button component={Link} to='/mystudents' variant="contained" style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                    My Students
                                </Button>
                            </CardActions>
                            <CardActions className="buttons">
                                <Button component={Link} to='/createstudent' variant="contained" style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                    Add Student
                                </Button>
                            </CardActions>
                        </Item>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;