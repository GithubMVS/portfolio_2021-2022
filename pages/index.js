import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Matisse Van Steenbergen</title>
        <meta name="Portfolio" content="Portfolio Matisse Van Steenbergen" />
      </Head>

      <main className={styles.main}>
       <p>Test</p>
      </main>
    </div>
  )
}
