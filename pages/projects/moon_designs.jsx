
import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';


import Link from 'next/link';
import Image from 'next/image';
import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';

import logo10 from '../../public/images/code5.png'
import logo9 from '../../public/images/moon.png'




export default function Moon(){

    return <>
    
    
      
<div className={styles.main2}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li className={styles.active}><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/skills'>Skills📚</Link></li>

</ul>


</div>


<div className={styles.navL2}>
    <ul>
        <li ><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(NextJS)</a></Link></li>


        <li><Link href='/projects/weather(api)'><a className={styles.proA}>Weather API(NextJS)<FaReact/></a></Link></li>
        <li className={styles.active}><Link href='/projects/moon_designs'><a className={styles.proA}>FreeLance Website(NextJS)<FaReact/></a></Link></li>
        <li><Link href='/projects/nutrient-graph'><a className={styles.proA}>Nutrients Graph(Python)<FaPython/></a></Link></li>
    </ul>
</div>


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

<div className={styles.graphImage2}>

<div class={styles.container2}>

        <Image src={logo10}  width='500px' height='400px' alt='Home Screen'/>

        </div>

</div>
</div>
    
    
    
    
    
    
    
    
    </>
}