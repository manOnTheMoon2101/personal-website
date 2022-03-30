import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';

import Image from 'next/image';

import Link from 'next/link';

import {FaPython} from 'react-icons/fa';

import logo8 from '../../public/images/graph.png'
import logo9 from '../../public/images/python.png'


export default function Graph(){

    return <>
    
    
      
<div className={styles.main2}>




<div className={styles.navbar}>

<ul>

<li><Link href='/'>Home🏠</Link></li>

<li className={styles.active}><Link href='/projects'>Projects📁</Link></li>
<li><Link href='/certificates'>Online Certificates📃</Link></li>

</ul>


</div>


<div className={styles.navL}>
    <ul>
        <li><Link href='/projects/personal-website'><a>Personal-Website(NextJS)</a></Link></li>



        
        <li className={styles.active}><Link href='/projects/nutrient-graph'><a>Nutrients Graph(Python)<FaPython/></a></Link></li>
    </ul>
</div>

<div className={styles.graphImage}>

<div class={styles.container2}>

        <Image src={logo8}  width='500px' height='400px' alt='Nutrients Graph'/>
        
        </div>

</div>

<div className={styles.graphPara}>

<p>
I used Matplotlib to display a Graph,which indicates the Maximum Nutrients I consumed 4 days a week.
The Green Line Represents the Goal which I want to consume per day.(I couldn't resist two hot dogs Wednesday). With this Data I can easily see where I slacked off,and which meals I sould avoid.
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