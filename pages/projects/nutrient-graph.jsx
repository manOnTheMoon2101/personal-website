import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';

import Image from 'next/image';

import Link from 'next/link';

import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {TiWeatherCloudy} from 'react-icons/ti';
import {AiOutlineGoogle} from 'react-icons/ai';
import {SiNextdotjs} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';


import logo8 from '../../public/images/graph.png'

import logo11 from '../../public/images/table.png'
import logo12 from '../../public/images/sqlCode.png'


export default function Graph(){

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

<div className={styles.graphImage2}>

<div class={styles.container2}>

        <Image src={logo8}  width='500px' height='300px' alt='Python Code'/>
   
        </div>

</div>








</div>
    
    
    

    
    
    
    
    </>
}