import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Matisse Van Steenbergen</title>
        <meta name="Portfolio" content="Portfolio Matisse Van Steenbergen" />
      </Head>

      <main className={styles.main}>
        <p className={styles.openingAndClosingTag}>Fullstack developper</p>
        <h1 className={styles.myFullName}>Matisse Van Steenbergen</h1>

        <nav>

        </nav>
      </main>
    </div>
  )
}
