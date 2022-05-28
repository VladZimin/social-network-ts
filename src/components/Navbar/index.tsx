import React from 'react'

import s from './Navbar.module.css'

const Navbar = () => {
  return <>
    <nav className={s.nav}>
      <div className={s.navbarItem}>Profile</div>
      <div className={s.navbarItem}>Messages</div>
      <div className={s.navbarItem}>News</div>
      <div className={s.navbarItem}>Music</div>
      <div className={s.navbarItem}>Settings</div>
    </nav>
  </>
}

export default Navbar