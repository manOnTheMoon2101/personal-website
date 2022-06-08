import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';


import Link from 'next/link';
import Image from 'next/image';

import {AiOutlineHome} from 'react-icons/ai';
import {AiFillFolderOpen} from 'react-icons/ai';
import {GrCloudComputer} from 'react-icons/gr';
import { motion } from 'framer-motion';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import logo10 from '../../public/images/code4.png'
import logo9 from '../../public/images/code3.png'




export default function Api(){

    return <>
    
    
      
<div className={styles.main2}>


<div className={styles.navbar}>

<ul>

<li className={styles.active}><a><Link href='/'>Home</Link><AiOutlineHome/></a></li>

<li><a>Projects<AiFillFolderOpen/><IoMdArrowDropdownCircle/></a></li>


<div className={styles.dropdownPList}>
<a><Link href='/projects/personal-website'>Personal Website(NextJS)</Link></a>
<br/>
<a><Link href='/projects/weather(api)'>Weather API(NextJS)</Link></a>
<br/>
<a><Link href='/projects/nutrient-graph'>Nutrient Graph(MySQL/Python)</Link></a>
<br/>
<a><Link href='/projects/moon_designs'>FreeLance Website(Analytics/ReactJS)</Link></a>

</div>


<li><a>Programming Skills<GrCloudComputer/><IoMdArrowDropdownCircle/></a></li>

<div className={styles.dropdownProList}>
<a><Link href='/skills/web-dev'>Web Development</Link></a>
<br/>
<a><Link href='/skills/networking'>Networking</Link></a>
<br/>
<a><Link href='/skills/databases'>Databases</Link></a>



</div>
</ul>


</div>


<motion.div


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



<div className={styles.graphImage}>

<div class={styles.container2}>

        <Image src={logo9}  width='500px' height='400px' alt='JSX Code'/>

        </div>

</div>


<div className={styles.personalPara}>
<p>
I've build this project with the OpenWeather API.<br/>

<a href='https://cleve-clayton-weather-app-manonthemoon2101.vercel.app/' target="_blank" rel="noopener noreferrer">Check out</a> the page and Enter any City name into the input field.<br/>

Working with api's can be difficult,but at the end it all worked out.
<br/>
<a href='https://github.com/manOnTheMoon2101/weather-api' target="_blank" rel="noopener noreferrer">Github Code:</a>

</p>



</div>

<div className={styles.graphImage21}>

<div class={styles.container2}>

        <Image src={logo10}  width='500px' height='500px' alt='Home Screen'/>

        </div>

</div>

</motion.div>
</div>
    
    
    
    
    
    
    
    
    </>
}