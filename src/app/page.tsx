import Image from 'next/image'
import styles from './page.module.css'
import BannerImg from "public/banner.svg";
import BackGround from "public/back.svg";
import JoinWaitList from '@/components/joinWaitList/JoinWaitList';
import { openSans } from '@/utils/fonts';
import { ABeeZee } from 'next/font/google';
import AiTestCycle from '@/components/aiTestCycle/AiTestCycle';
import AiChatWorkFlow from '@/components/aiChatWorkFlow/AiChatWorkFlow';

 const aBeeZee = ABeeZee({ 
  subsets: ['latin'],
  weight: ['400'],
})


export default function Home() {
  return (
    <>
  <main className={styles.container}>
    <h1 className={styles.title} style={openSans.style}>Integrate AI Throughout Your Workflow</h1>
    <h2 className={styles.subTitle} style={aBeeZee.style}>Code Doctor</h2>
    <p className={styles.desc} style={openSans.style}>Make processes where AI collaborates with your team throughout 
    <br/> the whole development process.</p>
    <JoinWaitList/>
    <div className={styles.imageContainer}>
    <Image 
        src={BackGround} 
        alt='background' 
        width={1200}
        height={1200}
        className={styles.imageBack}
        />
      <Image 
        src={BannerImg} 
        alt='' 
        width={1180}
        className={styles.image}
        />
    </div>
    </main>
    <AiTestCycle/>
    <AiChatWorkFlow/>
    </>
  )
}
