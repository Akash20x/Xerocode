import React from 'react'
import styles from "./aiChatWorkFlow.module.css"
import Image from 'next/image'
import Spiral from "public/spiral.png";
import { urbanist } from '@/utils/fonts';
import JoinWaitList from '../joinWaitList/JoinWaitList';
import { openSans } from '@/utils/fonts';


const AiChatWorkFlow = () => {
  return (
    <div className={styles.container} style={urbanist.style}>
        <h1 className={styles.title}>Use AI to handle workflows in your chat platforms.</h1>
        <div className={styles.features}>

            <div className={styles.card}>
                <span className={styles.cardHeading}>ask questions</span>
                <p className={styles.cardDesc}>To assist with managing the development, testing, and 
                    deployment process, ask it questions or issue instructions.</p>
                <div className={styles.cardButton}>Coming soon</div>
                <Image src={Spiral} alt='' className={styles.image}/>
            </div>

            <div className={styles.card}>
                <span className={styles.cardHeading}>execute</span>
                <p className={styles.cardDesc}>With a single command, you may run a series of tests or install a new version of a programme in a particular setting.</p>
                <div className={styles.cardButton}>Coming soon</div>
                <Image src={Spiral} alt='' className={styles.image}/>
            </div>

            <div className={`${styles.card} ${styles.custom}`}>
                <span className={styles.cardHeading}>Fix security concerns more quickly <br /> using generated code 
                     <br /> recommendations</span>
                <p className={styles.cardDesc}>With the aid of AI, recognise any security risk and swiftly and effectively fix it. <br/>
                    granting developers the freedom they require to protect their work frequently and early.</p>
                <Image src={Spiral} alt='' className={styles.image}/>
            </div>
            
         </div>

        <div className={styles.preFooter} style={openSans.style}>
            <h1 className={styles.preFooterTitle}>Automate all aspects of your delivery process with AI support.</h1>
            <p className={styles.preFooterDesc}>Get Early Access</p>
            <JoinWaitList/>
        </div>
    </div>
  )
}

export default AiChatWorkFlow
