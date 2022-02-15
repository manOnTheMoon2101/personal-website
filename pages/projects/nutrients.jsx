import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { motion } from 'framer-motion';

import logo1 from '../../public/images/Graph.png';
import logo2 from '../../public/images/code.png'

import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';






export default function Projects(){


    return <div>
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


<hr className={styles.headerL}/>

<div class={styles['grid-container']}>



<div class={styles['grid-item']}>



<ul>

    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

</ul>
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
animate={{opacity:1, x:0,transition:{delay:0.9}}}

exit={{opacity:0, y:100}}



>
<Image src={logo1} width='500px' height='400px'/>
</motion.div>



<motion.div className={styles.contentN}

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:1.5}}}

exit={{opacity:0, y:100}}



>


<h1>Matplotlib</h1>
<p>I used Matplotlib to build myself a graph,which displays the Maximum Nutrients I consumed 6 days a week.<br/>The 
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



<ul>

  
<p className={styles.info}>
   Webiste is powered
by NextJs
Created By Moon Designs:)

   </p>
   
</ul>
</div>





  </div>

    
}