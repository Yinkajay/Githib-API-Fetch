import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.path}>Home</NavLink>
      <NavLink to='/repos' className={styles.path}>Repos</NavLink>
    </nav>
  )
}

export default Navbar
