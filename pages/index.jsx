
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css';

import logo28 from '../public/images/react.jpg';



import logo4 from '../public/images/graph.png';
import logo5 from '../public/images/code.png';
import logo6 from '../public/images/code3.png';

import logo29 from '../public/images/cisco.png';
import logo7 from '../public/images/css.jpg'

import logo30 from '../public/images/star.svg'

import {AiOutlineHome} from 'react-icons/ai';
import {AiFillFolderOpen} from 'react-icons/ai';
import {GrCloudComputer} from 'react-icons/gr';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import Image from 'next/image';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from 'next/link';



export default function Home() {



 
  return <>
  
  <div className={styles.main}>




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



  


<motion.div className={styles.bodyWelcome}


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

<h1>Hello there!
 
  
  <br/>
  <span className={styles.welcome}>Welcome</span> to my WebPage.
  
  😄
</h1>

<div className={styles.star}>
  <Image  src={logo30} height='200px' width='200px'>

  </Image>

</div>

</motion.div>



  

<div className={styles.bodyAbout}>

<div className={styles.aboutSection}>
<h1>About <span>Me</span>💡</h1>
<p>My name is Cleve Clayton,born and raised in Wellington.
<br/>
  From chewing batteries as a baby,to starting programming as a hobby<br/> during lockdown,I knew technology was my future!

</p>
</div>

<div className={styles.aboutSection}>
  <p>
  "Name one genius that aint crazy."<br/>
A simple line from one of my favourite rappers/producers<br/>
of all time,Ye West.
  </p>
</div>

<div className={styles.aboutSection}>
  <p>
 I believe to be succesfull in our world today,you have to stand
 out from the others,our leaders and tech billionares have already proved that.
 I'm inspired everyday by the likes of Elon Musk,he showed me that if a child has a dream,he/she can 
 make it a reality by simply working hard and believing in him/herself.
  </p>
</div>
</div>


<div className={styles.slideShow}>


<Fade>

<div className={styles.projects}>

<h1>Checkout my <span>Projects</span><AiFillFolderOpen/></h1>

<div class={styles.container}>
<div className={styles.imageM}>
    
    <Link href='/skills'>
        <Image src={logo4}  width='500px' height='400px'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/skills'>
        <Image src={logo5}  width='500px' height='400px'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/skills'>
        <Image src={logo6}  width='500px' height='400px'/>
        </Link>
  
        </div>

    </div>



</div>




<div className={styles.certs}>

<h1>Checkout my  <span>Skills</span><GrCloudComputer/></h1>


<div class={styles.container}>

<div className={styles.imageM}>
    
  <Link href='/certificates'>
      <Image src={logo29}  width='500px' height='400px' alt='Python Intermediate'/>
      </Link>
      </div>

      <div className={styles.imageM}>
  <Link href='/certificates'>
      <Image src={logo28}  width='500px' height='400px' alt='Python3 Networking'/>
      </Link>
      </div>

      <div className={styles.imageM}>
  <Link href='/certificates'>
      <Image src={logo7}  width='500px' height='400px' alt='Css'/>
      </Link>

      </div>
      
    </div>

</div>


</Fade>




</div>

  </div>
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  </>
    
  
}
