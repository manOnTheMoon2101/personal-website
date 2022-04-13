import styles from '../../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css';


import Link from 'next/link';
import Image from 'next/image';
import {FaPython} from 'react-icons/fa';

import logo9 from '../../public/images/code.png'
import logo10 from '../../public/images/code2.png'




export default function Personal(){

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
        <li className={styles.active}><Link href='/projects/personal-website'><a className={styles.proA}>Personal-Website(NextJS)</a></Link></li>



        
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
I've build by website using the NextJS Framework.
I feel comfortable using React to make websites because of it's huge community and structured work layout.
I didn't go crazy on this website,but in the future I might add new animations to it,especially from Framer Motion.
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