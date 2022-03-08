import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { motion } from 'framer-motion';

import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {SiSololearn} from 'react-icons/si'
import {SiUdemy} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';

import logo20 from '../../public/images/network.jpg'
import logo30 from '../../public/images/Capture.png'

export default function Certficates(){


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


<div className={styles.navC}



>

<ul>
  <li><Link href='/certificates/udemy'>Udemy</Link><SiUdemy/></li>
  <li><Link href='/certificates/comptia'>CompTIA</Link></li>
  <li><Link href='/certificates/sololearn'>SoloLearn</Link><SiSololearn/></li>
</ul>


</div>

<motion.div

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, x:100}}


>

<div className={styles.box1}>

<div className={styles.card1}>

<Image src={logo30} width='400px' height='300px'/>
<span>
  A+

</span>
<p className={styles.study}>Still Studying...</p>
</div>


</div>

</motion.div>

<motion.div

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, x:100}}

  
>

<div className={styles.box2}>

<div className={styles.card2}>

<Image src={logo30} width='400px' height='300px'/>
<span>
N+

  
</span>
<p className={styles.study}>Still Studying...</p>
</div>
</div>

</motion.div>


<div className={styles.box3}>

<div className={styles.card3}>

<Image src={logo30} width='400px' height='300px'/>
<span>
  Cloud+

  
</span>
<p className={styles.study}>Still Studying...</p>
</div>
</div>



</div>





</div>






<div class={styles['grid-item2']}>





<p className={styles.info}>
   Webiste is powered
by NextJS
Created By Moon Designs:)

   </p>

</div>



  </div>




        
    
}