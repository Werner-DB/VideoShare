import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopBar from '../components/topBar'
import Chat from '../components/chat'
import Video from '../components/video'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VideoShare</title>
        <meta name="description" content="Groupware Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />


      <main className={styles.main}>
        <div className={styles.grid}>
          <Video />
          <Chat />
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          le pied de la page tu coocococococco

        </div>
      </footer>


    </div>
  )
}
