
import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';


import Link from 'next/link';
import Image from 'next/image';
import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {TiWeatherCloudy} from 'react-icons/ti';
import {AiOutlineGoogle} from 'react-icons/ai';
import {SiNextdotjs} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';

import logo10 from '../../public/images/code5.png'
import logo9 from '../../public/images/moon.png'




export default function Moon(){

    return <>
    
    
      
<div className={styles.main2}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li className={styles.active}><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/skills'>Programming Skills💻</Link></li>
</ul>


</div>


<div className={styles.navL2}>
    <ul>
    <li><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(<span className={styles.colorC}>NextJS</span>)<FaReact/><SiNextdotjs/></a></Link></li>

<li><Link href='/projects/weather(api)'><a className={styles.proA}>Weather API(<span className={styles.colorC}>OpenWeather API/NextJS</span>)<FaReact/><TiWeatherCloudy/></a></Link></li>


<li><Link href='/projects/moon_designs'><a className={styles.proA}>FreeLance Website(<span className={styles.colorC}>Google Analytics/NextJS</span>)<FaReact/><AiOutlineGoogle/></a></Link></li>

<li><Link href='/projects/nutrient-graph'><a className={styles.proA}>Nutrients Graph(<span className={styles.colorC}>MySQL/Python</span>)<FaPython/><SiMysql/></a></Link></li>

<li><a className={styles.proA}>To-Do App...(ReactNative)</a></li>
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