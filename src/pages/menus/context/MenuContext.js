import React from "react";
import { useContext } from "react";
import { useState } from "react";
import useMenuCard from "../hooks/useMenuCard";
import { useEffect } from "react";

const MenuContext =React.createContext(null);

const MenuProvider = ({children})=>{
    const [menus, setMenus]=useState(useMenuCard());
    const [command, setCommand]=useState([]);
    const [isSearching, setIsSearching]=useState(false);
    const [food, setFood]=useState([]);
    
    //add Command
    const addCommand = (id)=>{
         const newMenus = menus.map((obj=>{
            return obj.id ===id ? {...obj, commande: true }: obj
         }))
        setMenus(newMenus);
        const myCommand= newMenus.filter((obj)=>{return obj.commande===true});
       setCommand(myCommand);
    }
    
    useEffect(()=>{
       setCommand(command)
    },[command])

   //remove command
    const removeCommand =(id)=>{
        const newMenus = menus.map((obj=>{
            return obj.id ===id ? {...obj, commande: false }: obj
         }))
        setMenus(newMenus);
        const myCommand= newMenus.filter((obj)=>{return obj.commande===true});
       setCommand(myCommand);
    }
    return(
        <MenuContext.Provider
            value={{
                menus,
                setMenus,
                command,
                setCommand,
                addCommand,
                removeCommand,
                isSearching,
                setIsSearching,
                food,
                setFood
            }}
        >
            {children}
        </MenuContext.Provider>
    )
};
const useGlobalContext=()=>{
    return useContext(MenuContext);
}

export {MenuContext, MenuProvider, useGlobalContext};