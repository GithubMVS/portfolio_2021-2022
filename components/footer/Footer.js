import React from 'react'
import styles from '../footer/footer.module.css'
import Image from 'next/image'
import arrow from '../../public/images/footer/arrow_footer.svg'

const Footer = () => {
  return (
    <div className={styles.footerFull}>
      <div className={styles.footerFull_up}>
        <h1 className={styles.footerTitle}>Like what you`ve seen? <span className={styles.footerTitle_special}>Let’s talk.</span></h1>
        <div className={styles.socials_full}>
          <ul className={styles.socials}>
            <p className={styles.socials_title}>Connect with me:</p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Dribble</a></p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Codepen</a></p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Github</a></p>
          </ul>
          <ul className={styles.socials}>
            <p className={styles.socials_title}>My socials:</p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Linkedin</a></p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Linkedin</a></p>
            <p className={styles.socials_text}><a href="https://www.w3schools.com/">Linkedin</a></p>
          </ul>
        </div>

        <p className={styles.getInTouch}><a href="mailto: matisse.vs@protonmail.com">Get in touch!</a></p>

        <div className={styles.arrow_full}>
          <Image src={arrow} alt="arrow" />
          <p className={styles.arrow_full_text}>Click here</p>
        </div>
      </div>
      <div className={styles.footerFull_down}>
        <p className={styles.footerFull_down_text}>© efkolia Webdevelopment 2021</p>
        <a className={styles.footerFull_down_text} href="mailto: matisse.vs@protonmail.com">Matisse.vs@protonmail.com</a>
      </div>
    </div>
  )
}

export default Footer
