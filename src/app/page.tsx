import Image from 'next/image'
import Layout from './layout'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='overflow-x-hidden'>
        <div className='mt-[55px] relative'>
          <Image 
          src="/landing-page/Group 40.png" 
          alt="landing-page" 
          width={400}
          height={0}
          style={{ width: '100%', height: 'auto', zIndex:'-10' }}  />
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
        </div>
          <div className='px-[30px] md:px-[80px] lg:px-[100px]'>
            <h1 className='text-[#246BD6] font-bold text-2xl md:text-[40px]'>
              Selamat Datang
            </h1>
            <p className='text-sm text-justify mt-[30px] md:text-md lg:text-lg' style={{bottom: '19vw', left: '10.8vw'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='mt-[30px] px-[20px] py-[10px] bg-white text-[#246BD6] border-2 border-solid border-[#246BD6] font-bold rounded-[40px] text-2xl md:text-[40px] md:w-[35vw]'>
              Prinsip Perusahaan
            </div>
            <h1 className='text-[#246BD6] font-bold text-2xl md:text-[40px] mt-[30px]'>
              Menjadi agensi terbesar dan terbaik di Asia Pasifik
            </h1>
            <p className='text-sm text-justify mt-[30px] md:text-md lg:text-lg'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className='flex flex-col items-center md:flex-row mt-[30px] lg:gap-7'>
              <img src="/landing-page/Image Misi.png" alt="" className='w-[80vw]'/>
              <div className='flex flex-col px-[10px] mt-[20px]'>
                <h1 className='text-[#8E8E8E] text-md mb-[10px] md:mt-[20px] md:mb-[10px] md:text-lg lg:text-xl lg:mb-[30px]'>
                  Misi Kami
                </h1>
                <h1 className='text-[#246BD6] font-bold text-2xl mb-[10px] md:mb-[10px] lg:mb-[30px] md:text-[40px]'>
                  Kami Siap Membantu Anda!
                </h1>
                <p className='text-sm text-justify mt-[10px] mb-[25px] md:mb-[10px] md:text-md lg:text-lg'>
                Bersama misi kami, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className='flex flex-row gap-3 px-[20px] py-[15px] bg-[#F2F2F2] text-black border-2 border-solid border-[#CDCDCD] rounded-[20px] mb-[10px] text-xs items-center md:text-lg'>
                  <img src="/landing-page/Image 10.png" alt="" className='w-[7vw] md:w-[3vw]'/>
                  Membantu pelanggan dan keluarganya
                </div>
                <div className='flex flex-row gap-3 px-[20px] py-[15px] bg-[#F2F2F2] text-black border-2 border-solid border-[#CDCDCD] rounded-[20px] mb-[10px] text-xs items-center md:text-lg'>
                <img src="/landing-page/Image 9.png" alt="" className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]'/>
                  Meningkatkan kesadaran orang-orang mengenai pentingnya asuransi
                </div>
                <div className='flex flex-row gap-3 px-[20px] py-[15px] bg-[#F2F2F2] text-black border-2 border-solid border-[#CDCDCD] rounded-[20px] mb-[10px] text-xs items-center md:text-lg'>
                <img src="/landing-page/Image 11.png" alt="" className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]'/>
                  Meningkatkan kemakmuran bagi seluruh mitra bisnis VISION melalui sistem bisnis di Allianz
                </div>
              </div>
            </div>
            <div className='mt-[30px] px-[20px] py-[10px] bg-white text-[#246BD6] border-2 border-solid border-[#246BD6] font-bold rounded-[40px] text-2xl mb-[30px] md:text-[40px] md:w-[35vw]' >
            Value Perusahaan
            </div>
            <div className=' flex flex-col bg-[#D4E5FF] border-2 border-solid rounded-[20px] pb-[50px] mb-[50px] md:flex-row md:gap-[5vw] md:justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <span className='bg-gradient-to-r from-[#14037D] to-[#246BD6] text-transparent font-bold tracking-wider bg-clip-text text-[200px]'>
                S
                </span>
                <h1 className='text-[#246BD6] font-bold text-2xl'>
                  Simple
                </h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='bg-gradient-to-r from-[#14037D] to-[#246BD6] text-transparent font-bold tracking-wider bg-clip-text text-[200px]'>
                  P
                </span>
                <h1 className='text-[#246BD6] font-bold text-2xl'>
                  Practical
                </h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='bg-gradient-to-r from-[#14037D] to-[#246BD6] text-transparent font-bold tracking-wider bg-clip-text text-[200px]'>
                  E
                </span>
                <h1 className='text-[#246BD6] font-bold text-2xl'>
                  Effective
                </h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='bg-gradient-to-r from-[#14037D] to-[#246BD6] text-transparent font-bold tracking-wider bg-clip-text text-[200px]'>
                  E
                </span>
                <h1 className='text-[#246BD6] font-bold text-2xl'>
                  Easy
                </h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='bg-gradient-to-r from-[#14037D] to-[#246BD6] text-transparent font-bold tracking-wider bg-clip-text text-[200px]'>
                  D
                </span>
                <h1 className='text-[#246BD6] font-bold text-2xl'>
                  Duplicable
                </h1>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src="/landing-page/Background.png" alt="" className='hidden md:block'/>
            <img src='/landing-page/Background2.png' alt="" className='block w-[100vw] md:hidden'/>
            <div className='absolute flex flex-col items-center gap-5 bottom-[140vh] md:flex-row'>
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
                    <button className={styles.blueButton} style={{marginTop: '25px', borderRadius: '20px', width: '9vw', height: '3vw'}}>
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
      </div>
    </main>
  )
}
