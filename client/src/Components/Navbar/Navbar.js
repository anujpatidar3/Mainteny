import React from "react";
import Navbar from 'responsive-react-js-navbar'
import logo from '../../Images/Logo.png'

const NavBar = () => {
    const links = [{
        "href": "/",
        "label": "Home",
        "background": false,
    },

    {
        "href": "/mystudents",
        "label": "Students List",
        "background": false,
    },
    {
        "href": "/createstudent",
        "label": "Add Student",
        "background": false,
    },
    {
        "href": "/signin",
        "label": "Login",
        "background": false,
    },
    {
        "href": "/signup",
        "label": "Register",
        "background": true,
    },
    ]
    return (
        <Navbar
            logo={logo}
            logoHref='/'
            links={links}
        />
    )
}

export default NavBar;