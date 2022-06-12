import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';

import {AiOutlineHome} from 'react-icons/ai';
import {AiFillFolderOpen} from 'react-icons/ai';
import {GrCloudComputer} from 'react-icons/gr';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import { motion } from 'framer-motion';

import logo1 from '../../public/images/html.jpg';
import logo2 from '../../public/images/react.jpg';
import logo3 from '../../public/images/css.jpg';
import logo4 from '../../public/images/javascript.png';

import Image from 'next/image';





export default function Webdev(){

    return <>
    
    
      
  <div className={styles.main3}>




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



<div class={styles.container}>
<div className={styles.imageM}>
    
    
        <Image src={logo1}  width='500px' height='400px' alt='Intermediate Python'/>
        
        </div>
  
        <div className={styles.imageM}>
    
        <Image src={logo2}  width='500px' height='400px' alt='Python Networking'/>
        
        </div>
  
        <div className={styles.imageM}>


        <Image src={logo3}  width='500px' height='400px' alt='Python for Beginners'/>
        
  
        </div>


        <div className={styles.imageM}>
    
    
    <Image src={logo4}  width='500px' height='400px' alt='Intermediate Python'/>
    
    </div>

    </div>



<div className={styles.pythonP}>
    <p>When it comes to frond-end websites,ReactJS is my number one library to go to.
    I also use the NextJS Framework on top for more performance.I'm still learning the way of the back-end,
    with technologies like Django or plain NodeJS.
    </p>
</div>


</motion.div>
</div>
    
    
    
    
    
    
    
    
    </>
}