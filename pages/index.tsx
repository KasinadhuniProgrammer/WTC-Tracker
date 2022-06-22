import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WTC Tracker</title>
        <meta name="description" content="A WTC Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      
    </div>
  )
}

export default Home
