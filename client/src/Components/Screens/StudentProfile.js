import React, { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { Button, CardActions } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentProfile = () => {

    const [data, setData] = useState([]);
    const { studentid } = useParams()

    const [studentName, setStudentName] = useState("")
    const [rollNumber, setRollNumber] = useState("")
    const [maths, setMaths] = useState(false)
    const [DBMS, setDBMS] = useState(false)
    const [dataStructues, setDataStructues] = useState(false)
    const [AI, setAI] = useState(false)
    const [algorithms, setAlgorithms] = useState(false)
    const [OOPS, setOOPS] = useState(false)
    const [ML, setML] = useState(false)

    toast.configure();

    useEffect(() => {
        let mounted = true;
        fetch(`/mystudents/${studentid}`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": localStorage.getItem("jwt")
            }
        }).then(res => (res.json()))
            .then(result => {
                if (mounted) {
                    setData(result)
                }
            }).catch(err => {
                console.log(err)
            })

        return () => mounted = false;
    }, [])

    useEffect(() => {
        setStudentName(data.studentName)
        setRollNumber(data.rollNumber)
        setMaths(data.maths)
        setDBMS(data.DBMS)
        setDataStructues(data.dataStructues)
        setAlgorithms(data.algorithms)
        setAI(data.AI)
        setOOPS(data.OOPS)
        setML(data.ML)
    }, [data])
    
    const navigate = useNavigate()

    const updateData = () => {
        fetch("/updatestudent", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                studentid,
                studentName,
                rollNumber,
                maths,
                DBMS,
                dataStructues,
                algorithms,
                AI,
                ML,
                OOPS
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast(data.error,
                        { position: toast.POSITION.TOP_RIGHT })
                } else {
                    toast("Student Data Updated Succesfully",
                        { position: toast.POSITION.TOP_RIGHT })
                    navigate('/mystudents')
                }
            }).catch(err => {
                console.log(err)
            })

    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container style={{ justifyContent: "center", marginTop: "40px" }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={8} >
                        <TextField
                            style={{ width: "80%", marginLeft: "10%", marginTop: "20px" }}
                            required
                            type="text"
                            placeholder="Student Name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                        <TextField
                            style={{ width: "80%", marginLeft: "10%", marginTop: "20px" }}
                            required
                            type="text"
                            placeholder="Roll Number"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                        />
                        <FormGroup style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
                            <FormControlLabel control={<Checkbox checked={maths} onChange={(e) => setMaths(e.target.checked)} />} label="Maths" />
                            <FormControlLabel control={<Checkbox checked={DBMS} onChange={(e) => setDBMS(e.target.checked)} />} label="DBMS" />
                            <FormControlLabel control={<Checkbox checked={dataStructues} onChange={(e) => setDataStructues(e.target.checked)} />} label="Data Structures" />
                            <FormControlLabel control={<Checkbox checked={algorithms} onChange={(e) => setAlgorithms(e.target.checked)} />} label="Algorithms" />
                            <FormControlLabel control={<Checkbox checked={OOPS} onChange={(e) => setOOPS(e.target.checked)} />} label="OOPS" />
                            <FormControlLabel control={<Checkbox checked={AI} onChange={(e) => setAI(e.target.checked)} />} label="AI" />
                            <FormControlLabel control={<Checkbox checked={ML} onChange={(e) => setML(e.target.checked)} />} label="ML" />
                        </FormGroup>
                        <CardActions className="buttons">
                            <Button
                                onClick={() => updateData()}
                                variant="contained"
                                style={{ backgroundColor: "#000046", marginTop: "10px" }}>
                                Edit
                            </Button>
                        </CardActions>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StudentProfile;