
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css';

import logo1 from '../public/images/advance.png';
import logo2 from '../public/images/network.jpg';


import logo4 from '../public/images/graph.png';
import logo5 from '../public/images/code.png';
import logo6 from '../public/images/code2.png';


import logo7 from '../public/images/css.jpg'




import { useState } from 'react';

import Image from 'next/image';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from 'next/link';



export default function Home() {



 
  return <>
  
  <div className={styles.main}>




<div className={styles.navbar}>

<ul>

<li className={styles.active}><Link href='/'>Home🏠</Link></li>

<li><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/certificates'>Online Certificates📃</Link></li>

</ul>


</div>


  


<motion.div className={styles.bodyWelcome}


initial='start'
animate='animate'
exit='exit'

variants={{
  start:{
    scale:0,
    opacity:0,
    
    
    
  },

  animate:{
    scale:1,
    opacity:1,
    rotate:'360deg',
    transition:{
      duration:1
    }
  
  },

  exit:{
    scale:0,
 
    transition:{
      duration:.4
    }
    
  }

}}

>

<h1>Hello there!
  <br/>
  My name's Cleve
  <br/>
  <span className={styles.welcome}>Welcome</span> to my WebPage.
  
  😄
</h1>
</motion.div>



  

<div className={styles.bodyAbout}>

<div className={styles.aboutSection}>
<h1>About Me💡</h1>
<p>My name is Cleve Clayton,born and raised in Wellington.
<br/>
  From chewing batteries as a baby,to starting programming as a hobby<br/> during lockdown,I knew technology was my future!

</p>
</div>

<div className={styles.aboutSection}>
  <p>
  "Name one genius that aint crazy."<br/>
A simple line from one of my favourite rappers/producers<br/>
of all time,Ye West.
  </p>
</div>

<div className={styles.aboutSection}>
  <p>
 I believe to be succesfull in our world today,you have to stand
 out from the others,our leaders and tech billionares have already proved that.
 I'm inspired everyday by the likes of Elon Musk,he showed me that if a child has a dream,he/she can 
 make it a reality by simply working hard and believing in him/herself.
  </p>
</div>
</div>


<div className={styles.slideShow}>


<Fade>

<div className={styles.projects}>

<h1>Checkout my Projects📁</h1>

<div class={styles.container}>
<div className={styles.imageM}>
    
    <Link href='/projects'>
        <Image src={logo4}  width='500px' height='400px'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/projects'>
        <Image src={logo5}  width='500px' height='400px'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/projects'>
        <Image src={logo6}  width='500px' height='400px'/>
        </Link>
  
        </div>

    </div>



</div>




<div className={styles.certs}>

<h1>Checkout my certificates📃</h1>


<div class={styles.container}>

<div className={styles.imageM}>
    
  <Link href='/certificates'>
      <Image src={logo1}  width='500px' height='400px' alt='Python Intermediate'/>
      </Link>
      </div>

      <div className={styles.imageM}>
  <Link href='/certificates'>
      <Image src={logo2}  width='500px' height='400px' alt='Python3 Networking'/>
      </Link>
      </div>

      <div className={styles.imageM}>
  <Link href='/certificates'>
      <Image src={logo7}  width='500px' height='400px' alt='Css'/>
      </Link>

      </div>
      
    </div>

</div>


</Fade>




</div>

  </div>
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  </>
    
  
}
