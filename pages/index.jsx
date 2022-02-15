import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { useState } from 'react';

import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';

export default function Home() {
  const ani = {

    initial:{opacity:0, x:-100},
    animate:{opacity:1, x:0,transition:{delay:.9}},
    
    exit:{opacity:0, x:100},
    
  };
  const [isVisible] = useState(true)

 
  return (
    <div className={styles.home}>
      <Head>
        <title>Cleve Clayton</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>

        
      </Head>



<div className={styles.head}>

<h1 className={styles.header}>Cleve Clayton</h1>

<div className={styles.buttons}>

<button className={styles.insta}><Link href='https://www.instagram.com/man_on_the_moon2101/' target="_blank"><AiOutlineInstagram/></Link></button>
<button className={styles.git}><Link href='https://github.com/manOnTheMoon2101'><AiFillGithub/></Link></button>
<button className={styles.whats}><Link href="https://wa.me/%2B27746957353"><AiOutlineWhatsApp/></Link></button>

</div>



<CopyToClipboard text="clevejohnclayton.2101@gmail.com">
  
  <button className={styles.email}>clevejohnclayton.2101@gmail.com</button>
  
</CopyToClipboard>
<span className={styles.copied}>Copied!</span>
</div>





<div className={styles['grid-container']}>


  <div className={styles['grid-item']}>



  <ul>

    <li><Link className={styles.link2} href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

  </ul>
  </div>



<div class={styles['grid-itemM']}>




<AnimatePresence>
  {isVisible &&(

  

<motion.div className={styles.Homeheader}

    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0,transition:{delay:.9}}}
    
    exit={{opacity:0, x:100}}

>
<motion.div
initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:1.5}}}

exit={{opacity:0, x:100}}

>


<h1>Hey There!</h1>
<p>Welcome to my Personal Website.<br/>Sorry For All The <p className={styles.change}>'Wiring'</p>Please Do Enjoy The Journey!</p>


</motion.div>


</motion.div>
  )}
  </AnimatePresence>

</div>
 
</div>




<footer>
<div class={styles['grid-item21']}>





    
   <p className={styles.info}>
   Webiste is powered
by NextJs
Created By Moon Designs:)

   </p>

</div>
</footer>
    </div>
  )
}