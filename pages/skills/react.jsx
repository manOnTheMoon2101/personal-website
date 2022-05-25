import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';



import Link from 'next/link';




import Image from 'next/image';




import logo20 from '../../public/images/pythonS.png';
import logo21 from '../../public/images/reactS.png';
import logo22 from '../../public/images/comptS.png';
import logo23 from '../../public/images/javaS.png';
import logo24 from '../../public/images/htmlS.png';
import logo25 from '../../public/images/cssS.png';

import logo26 from '../../public/images/sql.png';
import logo27 from '../../public/images/ciscoS.png';
import logo28 from '../../public/images/react.jpg';
import logo29 from '../../public/images/wiresharkS.png';

export default function React(){

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

<a><Link href='/skills/wireshark'><Image src={logo29} width='100px' height='100px'></Image></Link></a> 
    </ul>
</div>

<div class={styles.container}>
<div className={styles.imageM}>
    
 
        <Image src={logo28}  width='400px' height='300px' alt='Full React'/>
      
        <p>React - The Complete Guide (incl Hooks, React Router, Redux)
</p>

        </div>
  
      
  

    </div>

    <div className={styles.pythonP}>
    <p>
        ReactJS is my favourite web framework by far.Already overpowered with it's custom JSX components,combine the power of React with NextJS,music to my ear...

        I'm currently learning React Native for App Dev.
    </p>
</div>

</div>
    
    
    
    
    
    
    
    
    </>
}