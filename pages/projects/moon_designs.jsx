
import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';

import {AiOutlineHome} from 'react-icons/ai';
import {AiFillFolderOpen} from 'react-icons/ai';
import {GrCloudComputer} from 'react-icons/gr';
import {IoMdArrowDropdownCircle} from 'react-icons/io';

import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

import logo10 from '../../public/images/code5.png'
import logo9 from '../../public/images/moon.png'




export default function Moon(){

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
I've build my own freelance business web page.<br/>
I provide Web Designing services with various options.<br/>
The Web Page is loaded with Google Analytics to see where my target audience is.

<br/>
<a href='https://github.com/manOnTheMoon2101/moondesigns2022-web' target="_blank" rel="noopener noreferrer">Github Code:</a>
</p>



</div>

<div className={styles.graphImage21}>

<div class={styles.container2}>

        <Image src={logo10}  width='500px' height='400px' alt='Home Screen'/>

        </div>

</div>

</motion.div>
</div>
    
    
    
    
    
    
    
    
    </>
}