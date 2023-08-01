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
      </div>
    </main>
  )
}
