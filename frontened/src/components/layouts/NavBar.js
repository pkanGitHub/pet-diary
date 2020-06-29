import React from 'react'

import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="nav-header">PetDiary</li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pets">Pets</NavLink></li>
                <li><NavLink to="/diaries">Diaries</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;