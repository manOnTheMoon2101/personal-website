import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';

import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {TiWeatherCloudy} from 'react-icons/ti';
import {AiOutlineGoogle} from 'react-icons/ai';
import {SiNextdotjs} from 'react-icons/si';



export default function Projects(){

    return <>
    
    
      
<div className={styles.main2}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li className={styles.active}><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/skills'>Skills📚</Link></li>

</ul>


</div>


<motion.div className={styles.navL2}

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
        <li><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(<span className={styles.colorC}>NextJS</span>)<FaReact/><SiNextdotjs/></a></Link></li>

        <li><Link href='/projects/weather(api)'><a className={styles.proA}>Weather API(<span className={styles.colorC}>OpenWeather API/NextJS</span>)<FaReact/><TiWeatherCloudy/></a></Link></li>


        <li><Link href='/projects/moon_designs'><a className={styles.proA}>FreeLance Website(<span className={styles.colorC}>Google Analytics/NextJS</span>)<FaReact/><AiOutlineGoogle/></a></Link></li>
        
        <li><Link href='/projects/nutrient-graph'><a className={styles.proA}>Nutrients Graph(<span className={styles.colorC}>Matplotlib/Python</span>)<FaPython/></a></Link></li>
    </ul>


</motion.div>



</div>
    
    
    
    
    
    
    
    
    </>
}