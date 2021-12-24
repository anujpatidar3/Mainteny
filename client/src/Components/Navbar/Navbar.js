import React from "react";
import Navbar from 'responsive-react-js-navbar'
import logo from '../../Images/Logo.png'

const NavBar = () => {
    const links = [{
        "href": "/",
        "label": "HOME",
        "background": false,
    },

    {
        "href": "/mystudents",
        "label": "MY STUDENTS",
        "background": false,
    },
    {
        "href": "/createstudent",
        "label": "ADD STUDENT",
        "background": false,
    },
    {
        "href": "/signin",
        "label": "LOGIN",
        "background": false,
    },
    {
        "href": "/signup",
        "label": "REGISTER",
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