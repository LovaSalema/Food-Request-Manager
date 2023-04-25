import React from "react";
import { useGlobalContext } from "../context/MenuContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faRectangleXmark)

const Card = ( {path, name, price, id, commande, client}) => {
   const {addCommand, removeCommand}= useGlobalContext();
    const formatPrice= price.toLocaleString('mg-MG', {style: 'currency', currency: 'MGA'})
   
    return (
        <>
            <div
                className={`bg-slate-100 rounded-sm lg:w-full px-3 py-2 border shadow-sm`}
            >
                <div
                    className="flex flex-col lg:flex-row p-auto w-full justify-between gap-6 items-start lg:items-center"
                >
                    <div 
                        className="flex flex-col lg:flex-row gap-4 justify-between"
                    >
                        <img className="w-[150px] " src={path} alt='card_img' />
                        <div
                            className="flex flex-col items-start justify-center text-slate-800"

                        >
                            <p
                            className="font-sans font-medium"
                            >
                                {name}
                                
                            </p>
                            <p

                            >
                                <b>
                                    {formatPrice}
                                </b>
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-row lg:flex-col-reverse justify-center items-center lg:items-end gap-6 lg:gap-4 relative mt-3 lg:mt-1"
                    >
                        {client?
                        (<button
                            onClick={()=>{addCommand(id); }}
                             type="button"
                             className={ commande? "bg-green-700 px-3 py-2 rounded-sm text-white font-bold text-sm lg:text-md" 
                             : "bg-slate-800 px-3 py-2 rounded-sm text-white font-bold text-sm lg:text-md"}
                         >
                            {commande? 'commandé': 'commander'}
                         </button>):(<></>)}
                        {commande? (<button onClick={()=>removeCommand(id)} className="lg:absolute bottom-12"><FontAwesomeIcon icon="rectangle-xmark"/></button>): <></>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;