import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Logo from "public/logo.svg";
import { spaceGrotesk } from '@/utils/fonts'; 
import UserLinks from '../shared/menu/UserLinks';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className={styles.container} style={spaceGrotesk.style}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt='' />
          </Link>
        </div>
        <div className={styles.navRightContainer}>
          <div className={styles.link}>
            <span className={styles.linkText}>XEROCODE</span>
          </div>
          <UserLinks/>
        </div>    
      </div>
      <div className={styles.divider}></div> 
    </div>
  )
}

export default Navbar
