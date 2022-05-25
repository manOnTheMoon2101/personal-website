import logo19 from '../public/images/rick.png'
import Image from 'next/image';
import styles from '../styles/Home.module.css';



export default function Custom404() {
    return <>
    <div className={styles.rick}>
    <Image src={logo19}  width='700px' height='500px'/>
    
    </div>

    <div className={styles.roll}>
   <p>You have been RickRolled for entering a unvalid link!!! 404-ERROR</p>
    
    </div>
    
    
    </>
  }