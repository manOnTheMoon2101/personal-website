import '../styles/globals.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AnimatePresence,motion } from 'framer-motion';
import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineDownload} from 'react-icons/ai';





function MyApp({ Component, pageProps,router }) {
  
  



  return <AnimatePresence><motion.div
  key={router.route}
  initial="pageStart"
  animate="pageAnimate"




      

    

  
  >
  
  <Head>
        <title>Cleve Clayton</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" type='image/icon type' href='favicon-32x32.png'/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Puritan&display=swap" rel="stylesheet"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"></link>


      </Head>
  
      <div className={styles.head}>



<div className={styles.socials}>

<a  className={styles.insta} href='https://www.instagram.com/man_on_the_moon2101/' title='Instagram' target="_blank"><AiOutlineInstagram/></a>
<a  className={styles.git} href='https://github.com/manOnTheMoon2101' title='GitHub' target="_blank"><AiFillGithub/></a>
<a className={styles.whats} href="https://wa.me/%2B27746957353" title='WhatsApp' target="_blank"><AiOutlineWhatsApp/></a>

<span className={styles.copy}>

<CopyToClipboard text="officer_tenpenny69#2369">
  
<button className={styles.disc}><BsDiscord/></button>
  
</CopyToClipboard>





<CopyToClipboard text="clevejohnclayton.2101@gmail.com">
  
  <button className={styles.email}><AiOutlineMail/></button>
  
</CopyToClipboard>



<h6>Copy & Paste</h6>
</span>



</div>









</div>



  
  
  <Component {...pageProps} />

<footer>

<div className={styles.footer}>

<div className={styles.downloadLink}>


</div>

</div>

<div className={styles.boX}>
  <p>This website is powered my NextJS<br/>

  <a href='https://moondesigns2022.co.za/' target="_blank">Created by Moon Designs</a></p>
</div>


<div className={styles.year}>
  <p>@2022</p>
</div>


</footer>

</motion.div>
</AnimatePresence>
  
}

export default MyApp
