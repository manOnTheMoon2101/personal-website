import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';

import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';


export default function Certificates(){

    return <>
    
    
      
<div className={styles.main3}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li><Link href='/projects'>Projects📁</Link></li>
<li className={styles.active}><Link href='/certificates'>Online Certificates📃</Link></li>

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
        <li><Link href='/certificates/python'><a>Python<FaPython/></a></Link></li>
        <li><Link href='/certificates/react'><a>React<FaReact/></a></Link></li>
        <li><Link href='/certificates/comptia'><a>CompTIA</a></Link></li>
        <li><Link href='/certificates/javascript'><a>JavaScript<SiJavascript/></a></Link></li>
        <li><Link href='/certificates/html'><a>HTML<AiFillHtml5/></a></Link></li>
        <li><Link href='/certificates/css'><a>CSS<DiCss3/></a></Link></li>
    </ul>
</motion.div>




</div>
    
    
    
    
    
    
    
    
    </>
}