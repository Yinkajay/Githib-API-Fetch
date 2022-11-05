import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink activeclassname={styles.active} to='/' className={styles.path}>Home</NavLink>
      <NavLink activeclassname={styles.active} to='/repos' className={styles.path}>Repos</NavLink>
    </nav>
  )
}

export default Navbar
