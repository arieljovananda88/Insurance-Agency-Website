import styles from '../styles.module.css'
import Branch from '../components/Branch'

export default function BranchOffice(){
    return(
        <main>
            <div className='mt-[100px] mx-[30px] md:mt-[150px] md:mx-[80px]'> 
                <h1 className='text-[#14037D] font-bold hidden md:block' style={{fontSize: '2.5vw'}}>
                    Cari Cabang Lokal Anda!
                </h1>
                <div className='' style={{marginTop: '30px'}}>
                    <form action="" className={styles.rowFlex}>
                        <div className='relative flex-1'>
                            <input id="search" type="text" placeholder=' ' className={`${styles.greySearchBar} peer px-4`}/>
                            <label className='absolute left-2 top-1/2 -translate-y-1/2 w-full hidden peer-placeholder-shown:flex peer-focus:hidden' htmlFor="search">
                                <img src='/branch-office/image 15.png' className='w-[2%] mr-[10px]'></img>
                                <p className='text-[#D3D3D3]'>Cari Vision</p>
                            </label>
                        </div>
                        <button className={styles.blueButton} style={{borderRadius: '13px', width: '10%', height: '6vh'}}>Hapus</button>
                    </form>
                </div>
                <div className='grid grid-cols-1 gap-5 mt-[30px] md:grid-cols-3 gap-10'>
                    <Branch></Branch>
                    <Branch></Branch>
                    <Branch></Branch>
                    <Branch></Branch>
                </div>
            </div>
        </main>
    )
}