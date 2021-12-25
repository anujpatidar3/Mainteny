import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import { UserContext } from "../../App";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import '../CSS/navbar.css'

const NavBar = () => {

    const { state, dispatch } = useContext(UserContext)

    const pages = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "Add Student",
            "link": "/createstudent"
        },
        {
            "name": "My Students",
            "link": "/mystudents"
        },
        {
            "name": "Log Out",
            "link": "/signin"
        }
    ]

    const loggedOut = [
        {
            "name": "Register",
            "link": "/signup"
        },
        {
            "name": "Log In",
            "link": "/signin"
        }
    ]

    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "rgba(0,0,70)" }}>
            <CssBaseline />
            <Container fixed>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to={state ? "/" : "/signin"}>
                            <img src={logo} alt="University" style={{ width: "20%", borderRadius: "6px", marginTop: "7px" }} />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {
                            state ?
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    style={{ position: "absolute" }}
                                >
                                    {pages.map((page) => (
                                        page.name === "Log Out" ?
                                            <MenuItem key={page.name} component={Link} to={page.link}
                                                style={{ color: "rgba(0,0,70)" }}
                                                onClick={() => {
                                                    dispatch({ type: "CLEAR" })
                                                    localStorage.clear()
                                                    handleCloseNavMenu()
                                                    window.location.reload()
                                                }}>
                                                <Typography textAlign="center">{page.name}</Typography>
                                            </MenuItem> :
                                            <MenuItem key={page.name} component={Link} to={page.link}
                                                style={{ color: "rgba(0,0,70)" }}
                                                onClick={() => { handleCloseNavMenu(); }}>
                                                <Typography textAlign="center">{page.name}</Typography>
                                            </MenuItem>
                                    ))}
                                </Menu>
                                :
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {loggedOut.map((item) => (
                                        <MenuItem key={item.name} component={Link} to={item.link}
                                            onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" style={{ color: "rgba(0,0,70)" }}>{item.name}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                        }
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to={state ? "/" : "/signin"}>
                            <img src={logo} alt="University" style={{ width: "20%", marginTop: "7px", borderRadius: "6px" }} />
                        </Link>
                    </Typography>
                    {
                        state ?
                            <Box className="rightPosition" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    page.name === "Log Out" ? <Button
                                        component={Link}
                                        to={page.link}
                                        key={uuidv4()}
                                        onClick={() => {
                                            dispatch({ type: "CLEAR" })
                                            localStorage.clear()
                                            handleCloseNavMenu()
                                            window.location.reload()
                                        }}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button> :
                                        <Button
                                            component={Link}
                                            to={page.link}
                                            key={uuidv4()}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.name}
                                        </Button>
                                ))}
                            </Box> :
                            <Box className="rightPosition" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {loggedOut.map((page) => (
                                    <Button
                                        component={Link}
                                        to={page.link}
                                        key={uuidv4()}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                ))}
                            </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;