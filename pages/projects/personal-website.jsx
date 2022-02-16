import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { motion } from 'framer-motion';

import logo4 from '../../public/images/folders.png'
import logo7 from '../../public/images/framer.png'



import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link';







export default function Personal(){


    return <div>
    <Head>
    <title>Cleve Clayton</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" type='image/icon type' href='../cleve.ico'/>

        
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>

      
    </Head>



<div className={styles.head}>

<h1 className={styles.header}>Cleve Clayton</h1>

<div className={styles.buttons}>

<button className={styles.insta}><Link href='https://www.instagram.com/man_on_the_moon2101/' target="_blank"><AiOutlineInstagram/></Link></button>
<button className={styles.git}><Link href='https://github.com/manOnTheMoon2101'><AiFillGithub/></Link></button>
<button className={styles.whats}><Link href="https://wa.me/%2B27746957353"><AiOutlineWhatsApp/></Link></button>

<div className={styles.paste}>
<CopyToClipboard text="officer_tenpenny69#2369">
  
<button className={styles.disc}><BsDiscord/></button>
  
</CopyToClipboard>





<CopyToClipboard text="clevejohnclayton.2101@gmail.com">
  
  <button className={styles.email}><AiOutlineMail/></button>
  
</CopyToClipboard>



<h6>Copy & Paste</h6>
</div>

</div>







</div>





<div class={styles['grid-container']}>



<div class={styles['grid-item']}>

<div className={styles.aboutN}>

<ul>

    <li><Link href='/'>Home</Link></li>
    <li><Link href='/about'>About Me</Link></li>
    <li><Link href='/certificates'>Online Certficates</Link></li>
    <li><Link href='/projects'>Projects</Link></li>

</ul>
</div>
</div>

<div class={styles['grid-itemMU4']}>

<div className={styles.navC}>

<ul>
  <li><Link href='/projects/nutrients'>Nutrients Graph(Python)</Link></li>
  <li><Link href='/projects/personal-website'>Personal Website(React/NextJS)</Link></li>
  
</ul>



</div>

<motion.div className={styles.nextH}

initial={{opacity:0, x:-100}}
animate={{opacity:1, x:0,transition:{delay:0.9}}}

exit={{opacity:0, y:100}}


>
<h1>NextJs</h1>

<p>I never published a normal HTML/CSS page before,my first website was a React Production.

With this Approach let to some frustrating times with my build,but in the end it was all worth the trouble.






</p>

<div className={styles.container}>
		<span className={styles['react-logo']}>
			<span className={styles.nucleo}></span>
		</span>
   
</div>


</motion.div>

<div className={styles.responsive}>

<h1>Component Layout</h1>

<p>I love Using the NextJS framework.
  The Component Layout of React Makes it Easier and more Cleaner to write Web-Pages.
  With NextJS though,the Routing is Simply AMAZING!.
  All you have to do is create a .jsx file into the pages folder and use the &lt;Link/&gt; tag to refer to the .jsx filename.Done!!!
</p>



<Image src={logo4}/>


</div>

<div className={styles.framer}>

<h1>Framer Motion</h1>

<p>
  I use Framer Motion for in and out Transitions.
  Unfortunelly I can't explain the physics behind it,but it's a Production-Ready React Library
  for animations.Maybe in the Future I'll update my website with some advance Animations,and I'll Definitely use Framer Motion.
</p>



<Image src={logo7}/>


</div>


</div>

</div>


<div class={styles['grid-item32']}>





  
<p className={styles.info}>
Webiste is powered
by NextJs
Created By Moon Designs:)

</p>
   
</div>




  </div>

    
}