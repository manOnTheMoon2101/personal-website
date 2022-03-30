import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';


import logo1 from '../../public/images/advance.png';
import logo2 from '../../public/images/network.jpg';
import logo3 from '../../public/images/beginner.png';

import Image from 'next/image';


import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';



export default function Python(){

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
    <li className={styles.active}><Link href='/certificates/python'><a>Python<FaPython/></a></Link></li>
        <li><Link href='/certificates/react'><a>React<FaReact/></a></Link></li>
        <li><Link href='/certificates/comptia'><a>CompTIA</a></Link></li>
        <li><Link href='/certificates/javascript'><a>JavaScript<SiJavascript/></a></Link></li>
        <li><Link href='/certificates/html'><a>HTML<AiFillHtml5/></a></Link></li>
        <li><Link href='/certificates/css'><a>CSS<DiCss3/></a></Link></li>
    </ul>
</div>

<div class={styles.container}>
<div className={styles.imageM}>
    
    <Link href='/projects'>
        <Image src={logo1}  width='500px' height='400px' alt='Intermediate Python'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/projects'>
        <Image src={logo2}  width='500px' height='400px' alt='Python Networking'/>
        </Link>
        </div>
  
        <div className={styles.imageM}>
    <Link href='/projects'>
        <Image src={logo3}  width='500px' height='400px' alt='Python for Beginners'/>
        </Link>
  
        </div>

    </div>



</div>
    
    
    
    
    
    
    
    
    </>
}