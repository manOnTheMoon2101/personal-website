import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';


import Link from 'next/link';
import Image from 'next/image';
import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {TiWeatherCloudy} from 'react-icons/ti';
import {AiOutlineGoogle} from 'react-icons/ai';
import {SiNextdotjs} from 'react-icons/si';

import logo10 from '../../public/images/code4.png'
import logo9 from '../../public/images/code3.png'




export default function Api(){

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
    <li><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(<span className={styles.colorC}>NextJS</span>)<FaReact/><SiNextdotjs/></a></Link></li>

<li><Link href='/projects/weather(api)'><a className={styles.proA}>Weather API(<span className={styles.colorC}>OpenWeather API/NextJS</span>)<FaReact/><TiWeatherCloudy/></a></Link></li>


<li><Link href='/projects/moon_designs'><a className={styles.proA}>FreeLance Website(<span className={styles.colorC}>Google Analytics/NextJS</span>)<FaReact/><AiOutlineGoogle/></a></Link></li>

<li><Link href='/projects/nutrient-graph'><a className={styles.proA}>Nutrients Graph(<span className={styles.colorC}>Matplotlib/Python</span>)<FaPython/></a></Link></li>
    </ul>
</div>


<div className={styles.graphImage}>

<div class={styles.container2}>

        <Image src={logo9}  width='500px' height='400px' alt='JSX Code'/>

        </div>

</div>


<div className={styles.personalPara}>
<p>
I've build this project with the OpenWeather API.<br/>

<a href='https://cleve-clayton-weather-app-manonthemoon2101.vercel.app/' target="_blank" rel="noopener noreferrer">Check out</a> the page and Enter any City name into the input field.<br/>

Working with api's can be difficult,but at the end it all worked out.
<br/>
<a href='https://github.com/manOnTheMoon2101/weather-api' target="_blank" rel="noopener noreferrer">Github Code:</a>

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