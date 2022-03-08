
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';


import { motion } from 'framer-motion';




import {SiSololearn} from 'react-icons/si'
import {SiUdemy} from 'react-icons/si'

import Link from 'next/link';





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

<div class={styles['grid-itemM']}>


<motion.div className={styles.navC}

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, y:100}}

>
<motion.div

initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:0.1}}}

exit={{opacity:0, y:100}}


>
<ul>
  <li><Link href='/certificates/udemy'>Udemy</Link><SiUdemy/></li>
  <li><Link href='/certificates/comptia'>CompTIA</Link></li>
  <li><Link href='/certificates/sololearn'>SoloLearn</Link><SiSololearn/></li>
</ul>

</motion.div>
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