import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'
import Logo from 'Logo.png'

const Navbar = () => {
    const activeStyle = {
        opacity: 1
    };
    return (
        <nav className="main-nav">
            <NavLink exact to="/" className="logo"><img src={Logo} alt="logo" width="100px"/></NavLink>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>트립아시아</NavLink></li>
                <li><NavLink exact to="/menu" activeStyle={activeStyle}>메뉴안내</NavLink></li>
                <li><NavLink exact to="/store" activeStyle={activeStyle}>매장안내</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar