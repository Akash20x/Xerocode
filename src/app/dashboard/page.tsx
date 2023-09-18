import React, { useState } from 'react'
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import WaitlistUsers from '@/components/wailistUsers/WaitlistUsers';
import axios from "axios";
import styles from './page.module.css'


const getUserDetails = async (session) => {  
    const res = await axios.get(`https://akash-xerocode.vercel.app/api/users/waitlist`,{ params: session })
    return res.data.waitlistData
  } 
 
  
  const capitalize = (str: any) => {  
    if (!str) return ''; 
    return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
  };


const Dashboard = async () => {
  
  const session = await getServerSession(options)
    
  const { name, email, role } = session?.user || {}; 
 
  const users = await getUserDetails(session)

      
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h3 className={styles.profileTitle}>{capitalize(role)}</h3>
        <p>{name && capitalize(name)}</p>
        <p>{email}</p>
      </div>
     <WaitlistUsers users={users} session={session}/>
    </div>
  )
}




export default Dashboard
