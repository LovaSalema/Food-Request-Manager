import React, {useState, useEffect} from "react";
import '../css/menu.css';
import Card from "../components/Card";
import { useGlobalContext } from "../context/MenuContext";

const MenusContainer = () => {
    const {menus, setCommand, isSearching, setIsSearching}= useGlobalContext();
    const [searched,setSearched]=useState([]);
    const [filtered, setFiltered]=useState(menus);
    
    useEffect(()=>{
        setSearched(menus);
        setFiltered(menus);
        const myCommand= filtered.filter((obj)=>{return obj.commande===true});
       setCommand(myCommand);
    },[menus])

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
    
    return (
        <>
            <div
                className=" flex h-auto w-full bg-[#C0E6BA] p-auto justify-center"
            >
                <div
                    className="mt-0 mb-0 bg-white/200 w-full flex justify-center"
                >

                    <div
                        className=" mt-20 mb-10 w-[35%] h-auto  transparent rounded-md m-auto p-3 flex flex-col"
                    >
                        <div
                            className="flex flex-col gap-3"
                        >
                            <div
                                className="flex flex-row relative"
                            >
                              
                                <input
                                    onChange={(e)=>handleOnChange(e.target.value)}
                                   
                                    type="text"
                                    className="outline-none border text-sm lg:text-md lg:px-2 py-1 mx-2 transparent rounded-sm max-w-md"
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
                                {isSearching?
                                    (searched.map((item)=>(
                                        <Card 
                                            key={item.id}
                                            commande={item.commande}
                                            path={item.path} 
                                            name={item.name}
                                            price={item.price}
                                            id={item.id}
                                            client={true}
                                        />))):
                                   (filtered.map((item)=>(
                                    <Card 
                                        key={item.id}
                                        commande={item.commande}
                                        path={item.path} 
                                        name={item.name}
                                        price={item.price}
                                        id={item.id}
                                        client={true}
                                    />
                                )))
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MenusContainer;