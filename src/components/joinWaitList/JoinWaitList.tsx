"use client";
import React, {useState} from 'react'
import styles from "./joinWaitList.module.css"
import { spaceGrotesk } from '@/utils/fonts'; 
import axios from "axios";
import { toast } from "react-hot-toast";


const JoinWaitList = () => {

    const [user, setUser] = useState({email: ""})

    const handleSubmit = async () => {

        try {
            const response = await axios.post("/api/users/waitlist", user);
            toast.success(response.data.message);
            setUser({ email: '' })

        } catch (error:any) {
            toast.error(error.response.data.error);
        }
    }

  return (
      <div className={styles.container} style={spaceGrotesk.style}>
            <input 
                type='email' 
                placeholder='Your Email' 
                className={styles.input} 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            <button onClick={handleSubmit} className={styles.button}>JOIN WAITLIST</button>
      </div>
  ) 
}

export default JoinWaitList
