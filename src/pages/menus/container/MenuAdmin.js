import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/MenuContext";
import Card from "../components/Card";
import ModalMenu from "../components/ModalMenu";

const MenuAdmin =()=>{
    const {menus, setIsSearching}= useGlobalContext();
    const [filtered, setFiltered]=useState(menus);
    const [searched,setSearched]=useState([]);
    
    const handleOnClick=(e)=>{
        
        if(e==='all'){
            setFiltered(menus)
        }else{
           
            const result =menus.filter(
                (menu)=>{
                    return menu.type === e;
                }
            );
            setFiltered(result);
        }
        setIsSearching(false)
    }
    const handleOnChange=(e)=>{
        let result = filtered.filter(
            (food)=>{
                const FoodName=food.name.toLowerCase();
                const term =e.toLowerCase();
                return(FoodName.indexOf(term)> -1)
            }
        )
        setSearched(result);
        setIsSearching(true);
}
    const [revealModale, setRevealModal]=useState(false);
    return (
        <>
             
            <div 
                className=" flex h-auto w-full bg-[#b6bf89] p-auto justify-center"
            >
                <div
                    className="mt-0 mb-0 bg-white/200 w-full flex flex-col items-center justify-center relative"
                >
                        <div
                            className=" mt-6"
                        >
                            <button
                            onClick={()=>setRevealModal(true)}
                            className=" bg-teal-600 text-white font-bold px-4 py-2 rounded-md">Ajouter nouveau menu</button>
                        </div>
                        <ModalMenu show={revealModale} handleModale={setRevealModal}/>
                    <div
                        className=" mt-10 mb-10 w-[35%] h-auto  transparent rounded-md m-auto p-3 flex flex-col"
                    >
                        <div
                            className="flex flex-col gap-3"
                        >
                            <div
                                className="flex flex-row"
                            >
                                <input
                                    onChange={(e)=>handleOnChange(e.target.value)}
                                   
                                    type="text"
                                    className="outline-none border text-md px-2 py-1 mx-2 transparent rounded-sm"
                                    placeholder="Recherche..."
                                />
                                <div>

                                </div>
                            </div>
                            <div
                                className="border-b text-sm flex flex-row justify-evenly"
                            >
                                <div  >
                                    <button  value='all' onClick={(e)=>handleOnClick(e.target.value)} className="font-bold text-slate-700 mb-1" >All</button>
                                </div>
                                <div  >
                                    <button  value='boisson' onClick={(e)=>handleOnClick(e.target.value)} className="font-bold text-slate-700 mb-1" >Boissons</button>
                                </div>
                                <div  >
                                    <button value='snacks'  onClick={(e)=>handleOnClick(e.target.value)} className="font-bold text-slate-700">Snacks</button>
                                </div>
                                <div  >
                                    <button value='spaghetti' onClick={(e)=>handleOnClick(e.target.value)} className="font-bold text-slate-700">Spaghetti</button>
                                </div>
                                <div  >
                                    <button value='soupe' onClick={(e)=>handleOnClick(e.target.value)} className="font-bold text-slate-700">Soupe</button>
                                </div>
                            </div>
                            <div
                                className=" flex flex-col h-screen gap-4 overflow-scroll lg:overflow-scroll scroll"
                            >
                             {   filtered.map((item)=>(
                                    <Card 
                                        key={item.id}
                                        commande={item.commande}
                                        path={item.path} 
                                        name={item.name}
                                        price={item.price}
                                        id={item.id}
                                        client={false}
                                    />))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </>
    )
}
export default MenuAdmin;