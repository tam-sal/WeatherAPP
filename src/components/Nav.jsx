import React from 'react'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Nav.module.css'
import Logo from '../assets/logoHenry.png'
import { Link } from 'react-router-dom'

function Nav({ onSearch }) {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftNav}>
        <Link to='/'>
          <img src={Logo} alt="Henry Weather" className={styles.logoHenry} />
        </Link>
        <p className={styles.appTitle}>Almost Sunny</p>
      </div>
      <div className={styles.about}>
        <Link to='/about'>About</Link>
      </div>
      <SearchBar
        onSearch={onSearch}
      />

    </nav>
  )
}

export default Nav