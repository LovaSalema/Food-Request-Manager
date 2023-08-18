import React, { useState } from "react";
import { useGlobalContext } from "../../menus/context/MenuContext";
import Card from "../../menus/components/Card";
import { useEffect } from "react";
const Commands = () => {
    const { command } = useGlobalContext();
    const [items, setItems]=useState(command);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        if (command.length > 0) {
            const count = command.reduce((accumulator, currentValue) => { return accumulator + currentValue.price }, 0)
            setTotal(count);
        }

    }, [command])
    useEffect(() => {
        setItems(command)
    }, [command])
    const formatPrice = total.toLocaleString('mg-MG', { style: 'currency', currency: 'MGA' })

    const handleDragStart=(e, index)=>{
        e.dataTransfer.setData('text/plain', index);
        
    }
 
    const handleDragOver =(e,index)=>{
        e.preventDefault();
    }
    const handleDrop=(e, index)=>{
        const dragIndex = e.dataTransfer.getData('text/plain');
        const newItems=[...items];
        const draggedItem = newItems[dragIndex];

        newItems.splice(dragIndex,1);
        newItems.splice(index, 0, draggedItem);

        setItems(newItems)

    }
    return (
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
                                className=" flex flex-col gap-4 overflow-scroll scroll"
                            >
                                {command?.length > 0 ?
                                    (items.map((item, index) => (
                                        <div
                                            draggable
                                            onDragStart={(e)=>handleDragStart(e, index)}
                                            onDragOver={(e)=>handleDragOver(e,index)}
                                            onDrop={(e)=>handleDrop(e, index)}
                                        >
                                            <Card
                                                key={item.id}
                                                commande={item.commande}
                                                path={item.path}
                                                name={item.name}
                                                price={item.price}
                                                id={item.id}
                                                client={true}
                                            />
                                        </div>

                                    ))) : (
                                        <p
                                            className="text-center text-slate-800 font-bold"
                                        >Aucune commande</p>
                                    )
                                }
                                {
                                    command?.length > 0 ?
                                        (
                                            <div
                                                className=" mt-8 flex flex-col h-auto gap-4 overflow-scroll scroll"
                                            >
                                                <button

                                                    type="button"
                                                    className="bg-slate-800 px-2 py-2 text-white font-bold rounded-md"
                                                >Total à payer : {formatPrice}</button>
                                            </div>

                                        ) : (<></>)
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