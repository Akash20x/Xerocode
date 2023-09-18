"use client";

import React, { useEffect, useRef, useState } from 'react'
import styles from "./userLinks.module.css"
import { signOut,useSession } from "next-auth/react"
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";


const UserLinks = () => {
    const { status, data } = useSession();
    const [isActive, setIsActive] = useState(false);
    
    const myRef = useRef<HTMLDivElement>(null);
    
    const toggleDropdown = () => {
      setIsActive(!isActive);
    };

    const clickOutside = (e: MouseEvent) => {

      if (myRef.current && myRef.current.contains(e.target as Node)) {        
        return;
      }      
      setIsActive(false);
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", clickOutside);
      return () => {
        document.removeEventListener("mousedown", clickOutside);
      };
    }, []);


  return (
    <div className={styles.container} ref={myRef}>
    <FaRegUserCircle size="2.5em" onClick={toggleDropdown} className={styles.menuIcon} />
    {isActive && (
      <div className={styles.menuContainer}>
          {status === 'authenticated' ? (
            <>
                <Link href="/dashboard" className={styles.menuItem}>
                  <li className={styles.menuItemText}>Dashboard</li>
                </Link>
              {data?.user?.role === 'admin' && (
                  <Link href="/dashboard/stats" className={styles.menuItem}>
                    <li className={styles.menuItemText}>Stats</li>
                  </Link>
              )}
              <span onClick={() => signOut({ callbackUrl: '/login' })} className={styles.menuItem} >
                <li className={styles.menuItemText}>Sign Out</li>
              </span>
            </>
          ) : (
            <>
                <Link href="/login" className={styles.menuItem}>
                <li className={styles.menuItemText}>Login</li>  
                </Link>
                <Link href="/register" className={styles.menuItem}>
                  <li className={styles.menuItemText}>Register</li>  
                </Link>
            </>
          )}
      </div>
    )}
  </div>

  )
}

export default UserLinks
