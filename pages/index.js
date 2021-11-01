import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

// imports of components
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Matisse Van Steenbergen</title>
        <meta name="Portfolio" content="Portfolio Matisse Van Steenbergen" />
      </Head>

      <main className={styles.main}>
        <header>
          <Navigation />
          <Header />
        </header>

        <Footer />
      </main>
    </div>
  )
}
