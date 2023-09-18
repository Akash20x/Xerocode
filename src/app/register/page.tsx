'use client'

import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from './page.module.css'
import GoogleIcon from "public/googleIcon.svg";
import Image from 'next/image'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

 
const Register = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
        })

    const [showPassword, setShowPassword] = useState(false);
    
    const submitHandler = async (e) => {
      e.preventDefault();
  
      try {        
        const res  = await axios.post(`https://akash-xerocode.vercel.app/api/register`, data);
      
        signIn("credentials",{
          ...data, redirect: true
        });

        if(res.data.success){
          toast.success("Signing you in");
        }
    
      } catch (error:any) {                 
        toast.error(error.response.data);
      }
    };
    


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
        
    
  return (
    <div className={styles.container}>
      <h3>Welcome</h3>
      <p className={styles.title}>Sign Up to continue with Xerocode.</p>
      <button onClick={()=>signIn("google",{ callbackUrl: '/dashboard' })} className={styles.oAuthButton}>
        <Image src={GoogleIcon} alt='' className={styles.image}/>
        <span>Continue with Google</span>
      </button>
      <div className={styles.alternateDivider}>
        <span>Or</span>
      </div>
    
      <form
          onSubmit={submitHandler}
          className={styles.form}
      >
        <div className={styles.formItem}>
          <label htmlFor="email_field">
            Enter email
          </label>
          <input
            type="email"
            id="email_field"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
        </div> 

        <div className={styles.formItem}>
          <label htmlFor="password_field">
            Password
          </label>
          <div className={styles.inputContainer}>
            {showPassword ? (
              <>
                <AiOutlineEyeInvisible onClick={togglePasswordVisibility} className={styles.eyeIcon}/>
                <input
                  type="text"
                  id="password_field"
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                />
              </>
            ): (
              <>
                <AiOutlineEye onClick={togglePasswordVisibility} className={styles.eyeIcon} />
                <input
                  type="password"
                  id="password_field"
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                />
              </>
            )}
          </div>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <p className={styles.extText}>Don&apos;t have an account? <Link href="/login" className={styles.extBtn}>Log in</Link></p> 
  </div>


  )
}

export default Register
