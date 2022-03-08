
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';


import { useState } from 'react';


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
      







<div className={styles['grid-container']}>


  <div className={styles['grid-item']}>

<div className={styles.aboutN}>

  <ul>

    <li><Link className={styles.link2} href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

  </ul>
  </div>

  </div>


<div class={styles['grid-itemM']}>




<AnimatePresence>
  {isVisible &&(

  

<motion.div className={styles.Homeheader}

    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0,transition:{delay:.1}}}
    
    exit={{opacity:0, x:100}}

>




<h1>Heyyy There!</h1>
<p>Welcome to my Personal Website.<br/>Sorry For All The <p className={styles.change}>'Wiring'</p>Please Enjoy The Journey!</p>




</motion.div>
  )}
  </AnimatePresence>

</div>
 
</div>




<footer>
<div class={styles['grid-item21']}>





    
   <p className={styles.info}>
   Webiste is powered
by NextJS
Created By Moon Designs:)

   </p>

</div>
</footer>
    </div>
  )
}
