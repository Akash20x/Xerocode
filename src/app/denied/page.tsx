import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'


const Denied = () => {
  return (
    <div className={styles.container}>
      <p>You are not authorized to view this page</p>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  )
}

export default Denied
