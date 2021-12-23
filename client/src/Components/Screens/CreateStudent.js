import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CreateStudent = () => {
    const [name, setName] = useState("")
    const [rollNumber, setRollNumber] = useState("")
    const [maths, setMaths] = useState(false)
    const [DBMS, setDBMS] = useState(false)
    const [dataStructues, setDataStructues] = useState(false)
    const [AI, setAI] = useState(false)
    const [algorithms, setAlgorithms] = useState(false)
    const [OOPS, setOOPS] = useState(false)
    const [ML, setML] = useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container  style={{justifyContent:"center",marginTop:"40px"}}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={8} >
                        <Item>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                style={{ width: "100%" }}
                                required
                                type="text"
                                placeholder="Roll Number"
                                value={rollNumber}
                                onChange={(e) => setRollNumber(e.target.value)}
                            />
                        </Item>
                        <Item>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={maths} onChange={(e) => setMaths(e.target.checked)} />} label="Maths" />
                                <FormControlLabel control={<Checkbox checked={DBMS} onChange={(e) => setDBMS(e.target.checked)} />} label="DBMS" />
                                <FormControlLabel control={<Checkbox checked={dataStructues} onChange={(e) => setDataStructues(e.target.checked)} />} label="Data Structures" />
                                <FormControlLabel control={<Checkbox checked={algorithms} onChange={(e) => setAlgorithms(e.target.checked)} />} label="Algorithms" />
                                <FormControlLabel control={<Checkbox checked={OOPS} onChange={(e) => setOOPS(e.target.checked)} />} label="OOPS" />
                                <FormControlLabel control={<Checkbox checked={AI} onChange={(e) => setAI(e.target.checked)} />} label="AI" />
                                <FormControlLabel control={<Checkbox checked={ML} onChange={(e) => setML(e.target.checked)} />} label="ML" />
                            </FormGroup>
                        </Item>
                        <Item>
                            <CardActions className="buttons">
                                <Button component={Link} to='/mystudents' variant="contained" style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                    Submit
                                </Button>
                            </CardActions>
                        </Item>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CreateStudent;