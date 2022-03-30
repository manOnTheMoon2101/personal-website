import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';

import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';



export default function Projects(){

    return <>
    
    
      
<div className={styles.main2}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li className={styles.active}><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/certificates'>Online Certificates📃</Link></li>

</ul>


</div>


<motion.div className={styles.navL}

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




    <ul>
        <li><Link href='/projects/personal-website'><a>Personal-Website(NextJS)<FaReact/></a></Link></li>



        
        <li><Link href='/projects/nutrient-graph'><a>Nutrients Graph(Python)<FaPython/></a></Link></li>
    </ul>


</motion.div>



</div>
    
    
    
    
    
    
    
    
    </>
}