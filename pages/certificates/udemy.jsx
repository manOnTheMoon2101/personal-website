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
    <Head>
    <title>Cleve Clayton</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" type='image/icon type' href='../cleve.ico'/>

        
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

<div className={styles.paste}>
<CopyToClipboard text="officer_tenpenny69#2369">
  
<button className={styles.disc}><BsDiscord/></button>
  
</CopyToClipboard>





<CopyToClipboard text="clevejohnclayton.2101@gmail.com">
  
  <button className={styles.email}><AiOutlineMail/></button>
  
</CopyToClipboard>



<h6>Copy & Paste</h6>
</div>

</div>







</div>





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


<motion.div className={styles.navC}

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.9}}}

exit={{opacity:0, y:100}}

>
<motion.div

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:1.5}}}

exit={{opacity:0, y:100}}


>
<ul>
  <li><Link href='/certificates/udemy'>Udemy</Link><SiUdemy/></li>
  <li><Link href='/certificates/comptia'>CompTIA</Link></li>
  <li><Link href='/certificates/sololearn'>SoloLearn</Link><SiSololearn/></li>
</ul>

</motion.div>
</motion.div>
<motion.div

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:2.1}}}

exit={{opacity:0, x:100}}


>
<div className={styles.box1}>

<div className={styles.card1}>

<Image src={logo20} width='400px' height='300px'/>
<span>Python Network Programming for Network Engineers (Python 3)

</span>
</div>


</div>
</motion.div>



<motion.div

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:2.7}}}

exit={{opacity:0, x:100}}



>
<div className={styles.box2}>

<div className={styles.card2}>

<Image src={logo30} width='400px' height='300px'/>
<span>
Wireshark: Packet Analysis and Ethical Hacking: Core Skills

  
</span>
<p className={styles.study}>Still Studying...</p>
</div>
</div>




</motion.div>
<div className={styles.box3}>

<div className={styles.card3}>

<Image src={logo30} width='400px' height='300px'/>
<span>React - The Complete Guide (incl Hooks, React Router, Redux)

  
</span>
<p className={styles.study}>Still Studying...</p>
</div>
</div>


</div>

</div>


<div class={styles['grid-item3']}>




  
<p className={styles.info}>
   Webiste is powered
by NextJs
Created By Moon Designs:)

   </p>
   

</div>



  </div>




        
    
}