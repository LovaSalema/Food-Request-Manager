import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/MenuContext";
const Dropdown = () => {
    const {food, setFood}= useGlobalContext();
    const [type, setType] = useState('Choisir type');
    const handleOnChange = (e)=> {
        setType(e.target.value);
        
    }

    useEffect(() => {
        setType(type);
       
    }, [type])

    
    return (
        <>
            <div className="flex flex-row mt-2 mb-2"> 
                <select value={type} onChange={handleOnChange} className="flex flex-col items-center rounded-sm text-sm z-20 shadow-sm border border-slate-300 ">
                    <option defaultValue='null' className="hover:bg-white w-full" value='choose'>--Choisir catégorie--</option>
                    <option  className="hover:bg-white w-full" value='boisson'>Boissons</option>
                    <option  className="hover:bg-white w-full" value='snack'>Snacks</option>
                    <option  className="hover:bg-white w-full" value='spaghetti'>Spaghetti</option>
                    <option  className="hover:bg-white w-full" value='soupe'>Soupe</option>
                </select>
                <div></div>
            </div>
        </>
    )
}
export default Dropdown;