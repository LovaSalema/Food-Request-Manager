import React from "react";

const Card = ({path, plat, prix}) => {
    return (
        <>
            <div
                className="bg-transparent rounded-sm w-full px-3 py-2 border"
            >
                <div
                    className="flex flex-row p-auto w-full justify-between "
                >
                    <img className="w-[150px] " src={path} alt='card_img' />
                    <div
                        className="flex flex-col items-start justify-center text-slate-800"

                    >
                        <p 
                        >
                            {plat}
                            plat 1
                        </p>
                        <p

                        >
                           <b>
                           {prix}
                            10 000Ar
                           </b>
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center"
                    >
                        
                        <button
                            type="button"
                            className="bg-slate-600 px-3 py-2 rounded-sm text-white font-bold"
                        >
                            Commander
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;