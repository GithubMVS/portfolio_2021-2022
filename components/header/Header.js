import React from 'react'
import Image from 'next/image'
import styles from '../header/header.module.css'


// images of me in header
import pictureMe1920 from '../../public/images/header/Header_image_1920.jpg'
import pictureMe1650 from '../../public/images/header/Header_image_1680.jpg'
import pictureMe1440_1280 from '../../public/images/header/Header_image_1440_1280.jpg'
import pictureMe1024 from '../../public/images/header/Header_image_1024.jpg'
import pictureMe768 from '../../public/images/header/Header_image_768.jpg'
import pictureMe428 from '../../public/images/header/Header_image_414.jpg'
import pictureMe414 from '../../public/images/header/Header_image_414.jpg'
import pictureMe375 from '../../public/images/header/Header_image_375.jpg'
import pictureMe320 from '../../public/images/header/Header_image_375.jpg'

// images of arrow in header
import arrow from '../../public/images/header/scrollArrowHeader.svg'
import arrow_small from '../../public/images/header/arrow__small.svg'
import arrow_extraSmall from '../../public/images/header/arrow__extra_small.svg'


const Header = () => {
  return (
    <div className={styles.headerFull}>
      <p className={styles.openingAndClosingTag}>Fullstack developper</p>
      <h1 className={styles.myFullName}>Matisse <br></br> Van Steenbergen</h1>
      <h1 className={styles.myFullName_mobile}>Matisse Van <br></br> Steenbergen</h1>
      <div className={styles.imageOfMe1920}><Image alt="pictureOfMe1920" width="810" height="613" src={pictureMe1920} /></div>
      <div className={styles.imageOfMe1680}><Image alt="pictureOfMe1680" width="650" height="492" src={pictureMe1650} /></div>
      <div className={styles.imageOfMe1440_1280}><Image alt="pictureOfMe1440_1280" width="601" height="449" src={pictureMe1440_1280} /></div>
      <div className={styles.imageOfMe1024} ><Image alt="pictureOfMe1024" width="824" height="615" src={pictureMe1024} /></div>
      <div className={styles.imageOfMe768}><Image alt="pictureOfMe768" width="614" height="350" src={pictureMe768} /></div>
      <div className={styles.imageOfMe414}><Image alt="pictureOfMe414" width="354" height="287" src={pictureMe414} /></div>
      <div className={styles.imageOfMe375}><Image alt="pictureOfMe375" width="315" height="204" src={pictureMe375} /></div>
      <div className={styles.imageOfMe320} ><Image alt="pictureOfMe320" width="279" height="181" src={pictureMe320} /></div>

      <div className={styles.experience__header_full}>
        <p className={styles.experience__header_text}>Scroll to experience</p>
        <div className={styles.scrollToExperience__arrow}><Image className={styles.scrollToExperience} layout="fixed" alt="pictureOfMe1920" src={arrow} /></div>
        <div className={styles.scrollToExperience__arrow_small}><Image className={styles.scrollToExperience} layout="fixed" alt="pictureOfMe1920" src={arrow_small} /></div>
        <div className={styles.scrollToExperience__arrow_extraSmall}><Image className={styles.scrollToExperience} layout="fixed" alt="pictureOfMe1920" src={arrow_extraSmall} /></div>
      </div>
    </div>
  )
}

export default Header
