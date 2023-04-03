import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Circlez Coffee</title>
        <meta name="description" content="The home of incredible Circlez Coffee. Become a member to save and earn rewards!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          alt=""
          src="/CirclezCoffeeLogo.png"
          width="200"
          height="200"
          className="d-inline-block align-top"
        />

        <p className={styles.description}>
          Welcome to the home of incredible Circlez Coffee!
        </p>

        <div className={styles.grid}>
          <a href="/membership" className={styles.card}>
            <h2>Membership &rarr;</h2>
            <p>We've just launched the Circlez Coffee membership program with exclusive benefits. Join here!</p>
          </a>

          <a href="/rewards" className={styles.card}>
            <h2>Rewards &rarr;</h2>
            <p>You can earn exclusive loyalty rewards when you shop with us through our web shop.</p>
          </a>

          <a
            target="_blank"
            href="https://circlez-coffee.myshopify.com/"
            className={styles.card}
          >
            <h2>Web Shop &raquo;</h2>
            <p>Buy our amazing coffee and high-quality merch from our new online web shop!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/__repl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on
          <span className={styles.logo}>
            <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
          </span>
          Replit
        </a>
      </footer>
    </div>
  )
}

export default Home
