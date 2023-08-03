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
          width={400}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}  />
          </div>
          <div className={styles.overlayHeading} style={{fontSize: '5vw'}}>
            <h1>
              Kepercayaan dan
            </h1>
            <h1>
            Keamanan.
            </h1>
          </div>
          <div className={styles.overlayParagraph} style={{bottom: '34vw', left: '32.7vw'}}>
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
            <p className={styles.paragraphText} style={{bottom: '19vw', left: '10.8vw'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={styles.ovalBlueText} style={{bottom: '12vw' }}>
              Prinsip Perusahaan
            </div>
            <h1 className={styles.blueText} style={{bottom: '10vw'}}>
              Menjadi agensi terbesar dan terbaik di Asia Pasifik
            </h1>
            <p className={styles.paragraphText} style ={{bottom: '10.5vw', left: '10.8vw'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className={styles.imageAndTextContainer} style={{position: 'relative', width: '100%', left: '10vw', bottom: '6vw'}}>
              <Image
                src="/landing-page/Image Misi.png" 
                alt="landing-page" 
                width={450}
                height={0}
                style={{width: '35vw', height: 'auto'}}
              />
              <div className={styles.textContainer}>
                <h1 className={styles.overlayParagraph} style={{bottom: '0vw', left: '23vw'}}>
                  Misi Kami
                </h1>
                <h1 className={styles.blueText} style={{bottom: '-1vw', left: '23vw'}}>
                  Kami Siap Membantu Anda!
                </h1>
                <p className={styles.paragraphText} style={{bottom: '-1vw', left: '0.5vw', width: '40vw'}}>
                Bersama misi kami, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className={styles.ovalGreyText} style={{marginTop: '3vw'}}>
                  <Image
                  src="/landing-page/Image 10.png" 
                  alt="landing-page" 
                  width={500}
                  height={0}
                  style={{width: '3vw', height: 'auto'}}/>
                  Membantu pelanggan dan keluarganya
                </div>
                <div className={styles.ovalGreyText} style={{marginTop: '1vw'}}>
                  <Image
                  src="/landing-page/Image 9.png" 
                  alt="landing-page" 
                  width={500}
                  height={0}
                  style={{width: '3vw', height: 'auto'}}/>
                  Meningkatkan kesadaran orang-orang mengenai pentingnya asuransi
                </div>
                <div className={styles.ovalGreyText} style={{marginTop: '1vw'}}>
                  <Image
                  src="/landing-page/Image 11.png" 
                  alt="landing-page" 
                  width={500}
                  height={0}
                  style={{width: '3vw', height: 'auto'}}/>
                  Meningkatkan kemakmuran bagi seluruh mitra bisnis VISION melalui sistem bisnis di Allianz
                </div>
              </div>
            </div>
            <div className={styles.ovalBlueText} >
            Value Perusahaan
            </div>
            <div className={styles.blueContainer} style={{left: '10.5vw', marginBottom: '10vw'}}>
              <span className={styles.gradientText} style={{fontSize:'13vw'}}>
                SPEED
                </span>
            </div>
          </div>
          <Image 
            src="/landing-page/Background.png" 
            alt="landing-page" 
            width={400}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}/>
            <div className={styles.flexImage} style ={{bottom: '26.5vw', left:'12%', gap: '20px'}}>
              <div className={`${styles.whiteContainer}`}>
                <ul>
                  <li className={styles.greyText}>
                    From The Blog
                  </li>
                  <li className={styles.darkBlueText} style={{fontSize:'2vw', marginTop: '15px'}}>
                    Judul Blog
                  </li>
                  <li style={{fontSize: '1vw', marginTop: '15px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </li>
                  <li>
                    <button className={styles.blueButton} style={{marginTop: '25px'}}>
                      See More
                    </button>
                  </li>
                </ul>
              </div>
              <div className={styles.whiteContainer}>
                <ul>
                  <li className={styles.darkBlueText} style={{fontSize:'2vw', marginTop: '15px'}}>
                    Our Details
                  </li>
                  <li className='font-bold' style={{marginTop: '20px', fontSize: '1vw'}}>
                    Sebuah Nama Gedung
                  </li>
                  <li style={{fontSize: '1vw'}}>
                    Alamat Ipsum is simply dummy text of the printing and typesetting industry. 
                  </li>
                  <li style={{marginTop: '20px'}}>
                    +62 123 456 789
                  </li>
                  <li style={{marginTop: '15px', marginBottom: '20px'}}>
                    info@perusahaan.co.id
                  </li>
                </ul>
              </div>
              <div className={styles.whiteContainer}>
                <ul>
                  <li className={styles.darkBlueText} style={{fontSize:'2vw'}}>
                    About Us
                  </li>
                  <li className='font-bold' style={{marginTop: '20px', fontSize: '1vw'}}>
                    Sebuah Catchphrase!
                  </li>
                  <li style={{fontSize: '1vw', marginBottom: '10px'}}>
                   Alamat Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  
                  </li>
                </ul>
              </div>
            </div>
      </div>
    </main>
  )
}
