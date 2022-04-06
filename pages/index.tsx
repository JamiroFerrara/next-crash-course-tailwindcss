import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Btn from '../components/Button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>Coming Soon..</h1>
          <Btn></Btn>
          <Btn></Btn>
          <Btn></Btn>
          <Btn></Btn>
        </div>
      </main>
    </div>
  )
}

export default Home
