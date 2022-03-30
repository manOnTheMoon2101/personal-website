import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';



import logo12 from '../../public/images/blank.png'
import Image from 'next/image';


import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';



export default function React(){

    return <>
    
    
      
  <div className={styles.main3}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li><Link href='/projects'>Projects📁</Link></li>
<li className={styles.active}><Link href='/certificates'>Online Certificates📃</Link></li>

</ul>


</div>

<div className={styles.navL}>
    <ul>
        <li><Link href='/certificates/python'><a>Python<FaPython/></a></Link></li>
        <li className={styles.active}><Link href='/certificates/react'><a>React<FaReact/></a></Link></li>
        <li><Link href='/certificates/comptia'><a>CompTIA</a></Link></li>
        <li><Link href='/certificates/javascript'><a>JavaScript<SiJavascript/></a></Link></li>
        <li><Link href='/certificates/html'><a>HTML<AiFillHtml5/></a></Link></li>
        <li><Link href='/certificates/css'><a>CSS<DiCss3/></a></Link></li>
    </ul>
</div>

<div class={styles.container}>
<div className={styles.imageM}>
    
 
        <Image src={logo12}  width='500px' height='400px' alt='Full React'/>
      
        <p>React - The Complete Guide (incl Hooks, React Router, Redux)
</p>
<span>Still Studying...</span>
        </div>
  
      
  

    </div>



</div>
    
    
    
    
    
    
    
    
    </>
}