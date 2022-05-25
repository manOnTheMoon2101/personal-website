import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';


import logo1 from '../../public/images/advance.png';
import logo2 from '../../public/images/network.jpg';
import logo3 from '../../public/images/beginner.png';

import Image from 'next/image';





import logo20 from '../../public/images/pythonS.png';
import logo21 from '../../public/images/reactS.png';
import logo22 from '../../public/images/comptS.png';
import logo23 from '../../public/images/javaS.png';
import logo24 from '../../public/images/htmlS.png';
import logo25 from '../../public/images/cssS.png';

import logo26 from '../../public/images/sql.png';
import logo27 from '../../public/images/ciscoS.png';

import logo30 from '../../public/images/wiresharkS.png';
export default function Python(){

    return <>
    
    
      
  <div className={styles.main3}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/skills'>Programming Skills💻</Link></li>
</ul>



</div>




<div className={styles.navL}>
    <ul>
<a><Link href='/skills/python'><Image src={logo20} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/react'><Image src={logo21} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/comptia'><Image src={logo22} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/javascript'><Image src={logo23} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/html'><Image src={logo24} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/css'><Image src={logo25} width='100px' height='100px'></Image></Link></a>

<a><Link href='/skills/sql'><Image src={logo26} width='100px' height='100px'></Image></Link></a> 

<a><Link href='/skills/cisco'><Image src={logo27} width='100px' height='100px'></Image></Link></a> 

<a><Link href='/skills/wireshark'><Image src={logo30} width='100px' height='100px'></Image></Link></a> 
      
    </ul>
</div>

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

    </div>



<div className={styles.pythonP}>
    <p>Python is my first programming language that I've learned.With this introduction to programming,made it easier for me to understand other programming languages as well.
    I did a bunch of projects with Python,which most of them included Ethical Hacking Tools.
    I'm currently learning Django for my back-end code.
    </p>
</div>

</div>
    
    
    
    
    
    
    
    
    </>
}