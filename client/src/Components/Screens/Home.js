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
                <Grid item xs={12} sm={6} md={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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