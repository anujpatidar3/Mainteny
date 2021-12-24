import React from "react"
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Screens/Home";
import SignIn from "./Components/Screens/SignIn";
import SignUp from "./Components/Screens/SignUp";
import MyStudents from "./Components/Screens/MyStudents";
import CreateStudent from "./Components/Screens/CreateStudent";
import StudentProfile from "./Components/Screens/StudentProfile";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CssBaseline />
      <Container fixed>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/mystudents' element={<MyStudents />}></Route>
          <Route exact path='/createstudent' element={<CreateStudent />}></Route>
          <Route exact path='/myStudents/:studentid' element={<StudentProfile />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
