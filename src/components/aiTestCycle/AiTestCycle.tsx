import React, { useEffect } from 'react'
import styles from "./aiTestCycle.module.css"
import Image from 'next/image'
import Build from "public/build.svg";
import Stack from "public/stack.svg";
import Circle from "public/circle.svg";
import { urbanist } from '@/utils/fonts';


const AiTestCycle = () => {

  return (
    <div className={styles.container}  style={urbanist.style}>
        <h1 className={styles.title}>Boost the speed of your development and test cycles.</h1>
        <p className={styles.desc}>With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.</p>
        <div className={styles.steps}>
            <div className={styles.card}>
                <div className={styles.step}>
                    <Image src={Build} alt='' className={styles.image}/>
                    <span className={styles.stepText}>CI/CD Pipeline Generate</span>
                </div>
                <div className={styles.divider}></div> 
                <div className={styles.step}>
                    <Image src={Stack} alt='' className={styles.image}/>
                    <span className={styles.stepText}>Build / Deploymnent</span>
                </div>
            </div>

            <div className={styles.circle}>
                <Image src={Circle} alt='' width={350} height={400}  />
                <h3 className={styles.circleAnimText}>Code Doctor👋</h3>
            </div>

            <div className={styles.card2}>
                <div  className={styles.step}>
                    <Image src={Build} alt='' className={styles.image}/>
                    <span className={styles.stepText}>Generate Test Cases</span>
                </div>
                <div className={styles.divider}></div> 
                <div className={styles.step}>
                    <Image src={Stack} alt='' className={styles.image}/>
                    <span className={styles.stepText}>Code Analysis</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AiTestCycle
