import React from 'react'
import styles from "./footer.module.css"
import { openSans } from '@/utils/fonts';

const Footer = () => {

  return (
    <div className={styles.container} style={openSans.style}>
        <p className={styles.copyright}>Copyright © 2023 
            <span className={styles.boldText}>&nbsp;XEROCODE TECHNOLOGIES</span> | All rights reserved
        </p>
    </div>
  )
}

export default Footer
