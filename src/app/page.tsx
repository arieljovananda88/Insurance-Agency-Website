import Image from 'next/image'
import Layout from './layout'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className=''>
        <div style={{ marginTop: '55px' }}>
          <Image 
          src="/landing-page/Group 40.png" 
          alt="landing-page" 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}  />
          </div>
          <div className={styles.overlayHeading}>
            <h1>
              Kepercayaan dan
            </h1>
            <h1>
            Keamanan.
            </h1>
          </div>
          <div className={styles.overlayParagraph}>
            <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h1>
          </div>
          <div>
            <Link href='/contact-us'>
              <button className={styles.overlayButton}>Get Started</button>
            </Link>
          </div>
          <div style={{padding: '10px'}}>
            <h1 className={styles.blueText} style={{bottom: '18vw'}}>
              Selamat Datang
            </h1>
            <p className={styles.paragraphText} style={{bottom: '19vw'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={styles.ovalBlueText} style={{position: 'relative', bottom: '12vw', left: '22vw' }}>
              Prinsip Perusahaan
            </div>
            <h1 className={styles.blueText} style={{bottom: '10vw'}}>
              Menjadi agensi terbesar dan terbaik di Asia Pasifik
            </h1>
            <p className={styles.paragraphText} style ={{bottom: '10.5vw'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
      </div>
    </main>
  )
}
