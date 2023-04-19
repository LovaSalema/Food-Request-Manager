import React from "react";
import { useGlobalContext } from "../../menus/context/MenuContext";
import Card from "../../menus/components/Card";
const Commands=()=>{
    const {command}= useGlobalContext();
    return(
        <>
        
            <div
                className=" flex h-auto w-full bg-[#b6bf89] p-auto justify-center"
            >
                <div
                    className="mt-0 mb-0 bg-white/200 w-full flex justify-center"
                >

                    <div
                        className=" mt-20 mb-10 w-[35%] h-auto  transparent rounded-md m-auto p-3 flex flex-col"
                    >
                        <div
                            className="flex flex-col gap-3 m-4"
                        >
                           
                           
                            <div
                                className=" flex flex-col h-screen gap-4 overflow-scroll scroll"
                            >
                                {command.length>0?
                                ( command.map((item)=>(
                                    <Card 
                                        key={item.id}
                                        commande={item.commande}
                                        path={item.path} 
                                        name={item.name}
                                        price={item.price}
                                        id={item.id}
                                    />
                                ))):(
                                    <p 
                                        className="text-center text-slate-800 font-bold"
                                    >Aucune commande</p>
                                )
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Commands;