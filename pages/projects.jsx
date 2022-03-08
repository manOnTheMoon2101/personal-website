import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { motion } from 'framer-motion';



import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';







export default function Projects(){


    return <div>
    





<div class={styles['grid-container']}>



<div class={styles['grid-item']}>

<div className={styles.aboutN}>

<ul>

    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

</ul>
</div>
</div>


<div class={styles['grid-itemM']}>

<motion.div className={styles.navC}

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, y:100}}


>

<ul>
  <li><Link href='/projects/nutrients'>Nutrients Graph(Python)</Link></li>
  <li><Link href='/projects/personal-website'>Personal Website(React/NextJS)</Link></li>
 

</ul>


</motion.div>


</div>

</div>
<div class={styles['grid-item21']}>




   
  
<p className={styles.info}>
   Webiste is powered
by NextJS
Created By Moon Designs:)

   </p>


</div>





  </div>

    
}