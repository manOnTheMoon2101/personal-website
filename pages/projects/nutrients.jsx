import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { motion } from 'framer-motion';

import logo1 from '../../public/images/Graph.png';
import logo2 from '../../public/images/code.png'



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

<div class={styles['grid-itemMU2']}>

<div className={styles.navC}>

<ul>
  <li><Link href='/projects/nutrients'>Nutrients Graph(Python)</Link></li>
  <li><Link href='/projects/personal-website'>Personal Website(React/NextJS)</Link></li>

</ul>


</div>



<motion.div className={styles.imageBox}


initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, y:100}}



>
<Image src={logo1} width='500px' height='400px'/>
</motion.div>



<motion.div className={styles.contentN}

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:.1}}}

exit={{opacity:0, y:100}}



>


<h1>Matplotlib</h1>
<p>I used Matplotlib to display a Graph,which indicates the Maximum Nutrients I consumed 4 days a week.<br/>The 
Green Line Represents the Goal which I want to consume per day.(I couldn't resist two hot dogs Wednesday).
With this Data I can easily see where I slacked off,and which meals I sould avoid.

</p>
<div className={styles.imgC}>

<Image src={logo2} width='500px' height='500px'/>

</div>


</motion.div>


</div>
</div>

<div class={styles['grid-item3']}>





  
<p className={styles.info}>
   Webiste is powered
by NextJS
Created By Moon Designs:)

   </p>

</div>





  </div>

    
}