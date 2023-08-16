const Branch = () =>{
    return(
        <div className="bg-white shadow-lg rounded-lg px-[30px] py-[20px] w-20vw md: px-[40px] py-[30px] lg:px-[60px] py-[40px]">
            <h1 className="text-[#246BD6] font-bold text-lg mb-[20px] md:text-xl lg:text-2xl">Cabang Vision</h1>
            <h2 className="text-[#246BD6] mb-[10px] text-md md:text-lg lg:text-xl">Vision Base Camp (VBC)</h2>
            <p className="text-md md:text-lg lg:text-xl">
            Jl. Veteran Ujung No. 63, Komplek Tanah lapang Desa Pasaribu Kecamatan Dolok Sanggul Kota Humbang Hasundutan
            </p>
            <p className="font-bold text-md  mb-[30px] md:text-lg lg:text-xl">
            Sumatera Utara 22457
            </p>
            <div className="flex flex-row mb-[30px]">
                <img src="/branch-office/Mask group.png" alt="" className="w-[25px] mr-[15px]"/>
                <p className="text-md md:text-lg lg:text-xl">+62 128 575 722</p>
            </div>
        </div>
    )
}

export default Branch