import styles from '../styles.module.css'

export default function BranchOffice(){
    return(
        <main>
            <div style={{marginTop: '150px', marginLeft: '60px', marginRight: '60px'}}> 
                <h1 className={styles.darkBlueText} style={{fontSize: '2.5vw'}}>
                    Cari Cabang Lokal Anda!
                </h1>
                <div className='' style={{marginTop: '30px'}}>
                    <form action="" className={styles.rowFlex}>
                        <input type="text" placeholder='Cari Vision' className={styles.greySearchBar}/>
                        <button className={styles.blueButton} style={{borderRadius: '13px', width: '10%', height: '6vh'}}>Hapus</button>
                    </form>
                </div>
            </div>
        </main>
    )
}