import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';


import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {GiSouthAfrica} from 'react-icons/gi'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';



import { motion } from 'framer-motion';

export default function About(){
  const ani = {

    initial:{opacity:0, x:-100},
    animate:{opacity:1, x:0},
    exit:{opacity:0, x:100},
  };
 
  const ani2 = {

    initial:{opacity:0, y:100},
    animate:{opacity:1, y:0},
    exit:{opacity:0, y:-100},
  };




    return <div>
    <Head>
    <title>Cleve Clayton</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" type='image/icon type' href='cleve.ico'/>
        
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



<ul>

    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

</ul>
</div>


<div class={styles['grid-itemMU3']}>


<motion.div className={styles.About}

initial={{opacity:0, x:100}}
    animate={{opacity:1, x:0,transition:{delay:.9}}}
    
    exit={{opacity:0, y:100}}



>
<motion.div
initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:1.5}}}

exit={{opacity:0, y:100}}>
<h1>About Me</h1>
<p>I'm a 19 year old self taught Programmer<br/> Born and Raised In <GiSouthAfrica/>.

</p>
</motion.div>

<motion.div
initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:2.1}}}

exit={{opacity:0, y:100}}

>





<p className={styles.left}>

Since The First Day my parents bought me a Playstation1,I fell in love not only in video games in general,but the Technology behind it.

<br/>

From there on I was always curious of what's happening behind the scenes and my love for computing never stopped With our Rapid Fast Technology growing every single day.



</p>
</motion.div>

<motion.div
initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:2.7}}}

exit={{opacity:0, y:100}}


>
<p className={styles.right}>

My biggest inspiration is Elon Musk,not only because he's from South Africa,but he inspires me everyday that a kid can achieve he's/her dream oneday by believing in themselves.
<br/>
My Goal is to make the world a better place using Technology,yeasterday whe used to pull levels,now we push buttons.
<br/>
I'm exited for our FUTURE!

</p>
</motion.div>
</motion.div>

</div>

</div>

<footer>
<div class={styles['grid-item21']}>



<ul>


      
<p className={styles.info}>
   Webiste is powered
by NextJs
Created By Moon Designs:)

   </p>
   
</ul>
</div>



</footer>


  </div>




        
    
}