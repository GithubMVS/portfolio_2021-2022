import React from 'react'
import styles from '../navigation/navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

import hamburgerMenu from '../../public/images/navigation/hamburger_menu.svg'

const Navigation = () => {
  return (
    <nav className={styles.navigationFull}>
      <p className={styles.navigation__title}>efkolia</p>
      <ul className={styles.navigation}>
        <li className={styles.navigation_navs}>My work</li>
        <li className={styles.navigation_navs}>About</li>
        <li className={styles.navigation_navs}>Experience</li>
        <li className={styles.navigation_navs}>Connect</li>
      </ul>
      <div className={styles.hamburgerMenu}><Image src={hamburgerMenu} alt='hamburgerMenu' /></div>
    </nav>
  )
}

export default Navigation
