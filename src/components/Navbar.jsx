import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
// import { fa-house } from 'react-icons/fa'
import { FaHome, FaGitAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink activeclassname={styles.active} to='/' className={styles.path}>
        <p>Home <FaHome style={{fontSize: '16px'}}/> </p> 
      </NavLink>
      <NavLink activeclassname={styles.active} to='/repos' className={styles.path}>
      <p>Repos <FaGitAlt style={{fontSize: '16px'}} /> </p>   
        </NavLink>
    </nav>
  )
}

export default Navbar
