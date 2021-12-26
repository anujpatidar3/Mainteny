import React, { useEffect, createContext, useReducer, useContext } from "react"
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from "./Components/Screens/Home";
import SignIn from "./Components/Screens/SignIn";
import SignUp from "./Components/Screens/SignUp";
import MyStudents from "./Components/Screens/MyStudents";
import CreateStudent from "./Components/Screens/CreateStudent";
import StudentProfile from "./Components/Screens/StudentProfile";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { reducer, initialState } from './Reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      navigate('/')
    } else {
        navigate('/signin')
    }
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<Home />}/> 
      <Route exact path='/signup' element={<SignUp />}/>
      <Route exact path='/signin' element={<SignIn />}/>
      <Route exact path='/mystudents' element={<MyStudents />}/>
      <Route exact path='/createstudent' element={<CreateStudent />}/>
      <Route exact path='/mystudents/:studentid' element={<StudentProfile />}/>
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <CssBaseline />
        <Container fixed>
          <Routing />
        </Container>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
