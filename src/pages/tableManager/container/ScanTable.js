const ScanTable=()=>{
    return(
        <>
        <div
                className=" flex h-screen w-full bg-[#b6bf89]  "
            >
                <div
                    className="m-auto bg-white/200 w-full flex justify-center "
                >

                    <div
                        className=" m-auto w-[35%] h-auto  transparent rounded-md  p-3 flex flex-col"
                    >
                        <div
                            className="flex flex-col gap-3 m-4"
                        >
                           
                           
                            <div
                                className=" flex flex-col h-auto gap-4 overflow-scroll scroll"
                            >
                                <button
                                
                                    type="button"
                                    className="bg-slate-800 px-2 py-2 text-white font-bold rounded-md"
                                >Veuillez-scanner votre table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ScanTable;