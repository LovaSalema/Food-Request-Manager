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
        setCommand(command.filter((menu)=>menu.id !== id));
        const Index = menus.findIndex((obj)=>obj.id === id);
        setMenus(menus[Index].commande=false)
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
                setIsSearching
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