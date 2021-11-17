import React from 'react'
import styles from '../development_expertise/expertise.module.css'
import Image from 'next/image'

// svg imports
import backend from '../../public/images/expertise/backend.svg'
import front_end from '../../public/images/expertise/front_end.svg'
import google from '../../public/images/expertise/google.svg'
import mobile_development from '../../public/images/expertise/mobile_development.svg'
import software from '../../public/images/expertise/software.svg'
import UI_UX from '../../public/images/expertise/UI_UX.svg'

const expertise = () => {
  return (
    <section className={styles.expertise__full}>
      <h1 className={styles.expertise__full_title}>My development expertise</h1>
      <div className={styles.expertise}>
        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="UI_UX" src={UI_UX} /></div>
          <p className={styles.expertise__text}>UI/UX and digital design</p>
        </div>

        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="mobile_development" src={mobile_development} /></div>
          <p className={styles.expertise__text}>App and mobile development</p>
        </div>

        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="front_end" src={front_end} /></div>
          <p className={styles.expertise__text}>Front-End Development</p>
        </div>

        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="backend" src={backend} /></div>
          <p className={styles.expertise__text}>Backend Development</p>
        </div>

        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="software" src={software} /></div>
          <p className={styles.expertise__text}>Software development</p>
        </div>

        <div className={styles.expertise__each}>
          <div className={styles.expertise__image}><Image alt="google" src={google} /></div>
          <p className={styles.expertise__text}>Professional googler</p>
        </div>
      </div>
    </section>
  )
}

export default expertise
