import 'font-awesome/css/font-awesome.min.css';
import React from "react"
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
const ModalMenu = ({show, handleModale}) => {

    return (
        <>
           <div className={show?"fixed z-50 top-14" : "hidden"}>
           <div
                className=" bg-[#ffffff] rounded-md relative"
            >
                <button
                    onClick={()=>handleModale(false)} 
                className="absolute right-4 top-2 py-0 px-1 rounded-sm text-center hover:bg-slate-300">x</button>
                <div
                    className="p-4"
                >
                    <h2 className="text-slate-800 font-bold text-center">Nouveau menu</h2>
                    <form className="flex flex-col gap-2 px-4 py-2">
                        <label
                            className="text-slate-800 text-sm" 
                        > Plat
                            
                        </label>
                        <input type='text' className=" bg-transparent w-[280px] border border-slate-400 outline-none text-sm py-1 rounded-sm" />
                        <label
                            className="text-slate-800 text-sm"
                        >   Prix
                           
                        </label>
                        <input type='number'  className="bg-transparent border border-slate-400 outline-none text-sm py-1 rounded-sm"/>
                        
                            <Dropdown/>
                        <label
                             className="text-slate-800 text-sm flex flex-col gap-1 items-start cursor-pointer"
                        >
                            Image
                            <FontAwesomeIcon className='ml-5 text-xl mt-2' icon={faArrowUpFromBracket} />
                            <input type="file" className='overflow-hidden hidden'/>
                        </label>
                        
                        <div
                            className="flex flex-row justify-evenly mt-3"
                        >
                            <button onClick={()=>handleModale(false)} type="reset" className=" font-bold text-sm bg-red-600 px-3 py-1 rounded-sm text-white">
                                Annuler
                            </button>
                            <button className="bg-sky-700 px-3 py-1 rounded-sm text-white font-bold text-sm">
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}
export default ModalMenu