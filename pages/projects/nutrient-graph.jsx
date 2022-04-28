import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';

import Image from 'next/image';

import Link from 'next/link';

import {FaPython} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';

import logo8 from '../../public/images/graph.png'
import logo9 from '../../public/images/python.png'


export default function Graph(){

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
        <li><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(NextJS)</a></Link></li>


        <li><Link href='/projects/weather(api)'><a className={styles.proA}>Weather API(NextJS)<FaReact/></a></Link></li>
        <li><Link href='/projects/moon_designs'><a className={styles.proA}>FreeLance Website(NextJS)<FaReact/></a></Link></li>
        <li className={styles.active}><Link href='/projects/nutrient-graph'><a className={styles.proA}>Nutrients Graph(Python)<FaPython/></a></Link></li>
    </ul>
</div>

<div className={styles.graphImage}>

<div class={styles.container2}>

        <Image src={logo8}  width='500px' height='400px' alt='Nutrients Graph'/>
        
        </div>

</div>

<div className={styles.graphPara}>

<p>
I used Matplotlib to display a Graph<br/>,which indicates the Maximum Nutrients I consumed 4 days a week.<br/>
The Green Line Represents the Goal which I want to consume per day.<br/>(I couldn't resist two hot dogs Wednesday).<br/> With this Data I can easily see where<br/> I slacked off,and which meals I sould avoid.
<br/>
<a href='https://github.com/manOnTheMoon2101/Nutrients_Graph/' target="_blank" rel="noopener noreferrer">Github Code:</a>
</p>


</div>

<div className={styles.graphImage2}>

<div class={styles.container2}>

        <Image src={logo9}  width='500px' height='400px' alt='Python Code'/>
   
        </div>

</div>


</div>
    
    
    
    
    
    
    
    
    </>
}