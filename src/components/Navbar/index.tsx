import React from 'react'

import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const navList = [ 'Profile', 'Messages', 'News', 'Music', 'Settings' ]
type isActiveNavType = {
    isActive: boolean
}

const Navbar = () => {
    const activeNav = {
        color: 'rgba(117, 149, 231, 0.76)'
    }
    
    return <nav className={s.nav}>
        {navList.map( ( item, i ) => (<NavLink
            key={i}
            to={item.toLowerCase()}
            className={s.navbarItem}
            style={( { isActive }: isActiveNavType ) => isActive ? activeNav : {}}
        >
            {item}
        </NavLink>) )}
    </nav>
}

export default Navbar
