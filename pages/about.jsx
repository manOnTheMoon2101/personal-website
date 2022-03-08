
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';


import {GiSouthAfrica} from 'react-icons/gi';
import {SiPlaystation2} from 'react-icons/si';
import {FaPython} from 'react-icons/fa';
import {GiPlantSeed} from 'react-icons/gi';

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

<div class={styles['grid-itemMU3']}>


<motion.div className={styles.About}

initial={{opacity:0, x:100}}
    animate={{opacity:1, x:0,transition:{delay:.1}}}
    
    exit={{opacity:0, y:100}}



>

<motion.div
initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:.1}}}

exit={{opacity:0, y:100}}>
<h1>About Me</h1>

<p>My name's <span className={styles.cleveH}>Cleve Clayton</span><br/>Born and Raised In <span className={styles.africa}><GiSouthAfrica/></span></p>
</motion.div>


<div className={styles.left}>
  
  <p>
 <span className={styles.qoute}>"Name one genius that aint crazy."</span>
<br/>
A simple line from one of my favourite rappers/producers of all time,Ye West.
<br/>If you think about it,sounds pretty accurate right?
  </p>
  
<p>
From a young age playing on my <span className={styles.play}><SiPlaystation2/></span> that my parents bought me,to felling in love with Programming since installing <span className={styles.python}><a href='https://www.python.org/'><FaPython/></a></span> on my local Machine,I knew Technology was in my blood.
</p>
  
<p>
In a world where rascim and sexism is a huge problem,my main goal is to unite our world so that our children and their children can live in a world in peace.
<span className={styles.plant}><GiPlantSeed/></span>
</p>
  </div>

<p>



</p>




<motion.div
initial={{opacity:0, x:100}}
animate={{opacity:1, x:0,transition:{delay:.1}}}

exit={{opacity:0, y:100}}

>





</motion.div>

<motion.div
initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:.1}}}

exit={{opacity:0, y:100}}


>

</motion.div>



</motion.div>

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




        
    
}