import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';

import Image from 'next/image';

import Link from 'next/link';


import {AiOutlineHome} from 'react-icons/ai';
import {AiFillFolderOpen} from 'react-icons/ai';
import {GrCloudComputer} from 'react-icons/gr';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import { motion } from 'framer-motion';


import logo8 from '../../public/images/graph.png'

import logo11 from '../../public/images/table.png'
import logo12 from '../../public/images/sqlCode.png'



export default function Graph(){

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

        <Image src={logo11}  width='300px' height='200px' alt='Nutrients Graph'/>
        
        </div>

</div>

<div className={styles.graphPara}>

<p>
I used MySQL with Python3 to make myself a calorie deficit table to see how many calories I've taken and burned a day.With this data I used Matplotlib to display a Graph for a more Visual Experience.
<br/>
<a href='https://github.com/manOnTheMoon2101/Nutrients_Graph/' target="_blank" rel="noopener noreferrer">Github Code:</a>
</p>


</div>

<div className={styles.graphImage2}>

<div class={styles.container2}>

        <Image src={logo12}  width='500px' height='300px' alt='Python Code'/>
   
        </div>

</div>

<div className={styles.graphImage21}>

<div class={styles.container2}>

        <Image src={logo8}  width='500px' height='300px' alt='Python Code'/>
   
        </div>

</div>





</motion.div>


</div>
    
    
    

    
    
    
    
    </>
}