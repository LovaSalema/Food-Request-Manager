import React, { useState, useReducer } from "react";
import { useTableRequestList } from "../hooks/useTableRequestList";
import '../css/Table.css'
import  PaginationComponents from "../components/PaginationComponents";
const TableRequestList =()=>{
    const [isFiltering, setIsFiltering]= useState(false);
    const [filtered, setFiltered]=useState()
    const Data = useTableRequestList();
    const handleOnChange=(e)=>{
        let result = Data.filter((item)=>{
            const name = item.name.toLowerCase();
            const lastname= item.lastName.toLowerCase();
            const term = e.toLowerCase()
            return (name.indexOf(term) > -1 || lastname.indexOf(term)>-1)
        })
        setFiltered(result)
    }
    
    const initialState= {count: 0}
    const reducer =(state, action)=>{
        switch (action.type) {
            case 'increment':
                return {count : state.count +1}
            case 'decrement':
                return {count : state.count -1}
            case 'reset':
                return {count : 0}
    
            default:
                throw new Error();
        }
    }
const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <div
                className="bg-slate-100 w-full h-screen flex flex-col gap-2 items-center"
            >
                <div
                    className="flex flex-row justify-between w-[80%] mt-8 mb-4"
                >
                    <h1 className="text-xl "><b>Tableau</b></h1>
                    <div 
                        className="flex gap-2"
                    >
                        <button 
                            className="bg-stone-600 px-2"
                            onClick={()=>dispatch({type: 'decrement'})}
                        > - </button>

                        {state.count}
                        <button
                            className="bg-stone-600 px-2"
                            onClick={()=>dispatch({type: 'increment'})}
                        > + </button>
                         <button
                            className="bg-stone-600 px-2"
                            onClick={()=>dispatch({type: 'reset'})}
                        > reset </button>
                    </div>
                    <div
                        
                    >
                        <form 
                            action="submit" 
                            className="flex gap-4 items-center"
                        >
                            <div>
                                <input 
                                     onChange={(e)=>{handleOnChange(e.target.value); setIsFiltering(e.target.value.length>0)}}
                                type="text" className="outline-none border rounded-sm border-slate-700" />
                            </div>
                            <button type="submit" 
                            className="bg-cyan-600 text-white px-2 py-1 rounded-md"
                               
                            >Search</button>
                        </form>
                    </div>
                </div>
                <table 
                    className="bg-white w-[80%] h-auto p-8 pl-8 rounded-md"
                >
                    <thead>
                        <th>Nom</th>
                        <th>Prénoms</th>
                        <th>Téléphone</th>
                        <th>Adresse</th>
                        <th>Article</th>
                        <th>Nombre</th>
                        <th>Prix total</th>
                    </thead>
                    {
                        isFiltering ? (
                            filtered?.map((item)=>(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.adress}</td>
                                    <td>{item.item}</td>
                                    <td>{item.number}</td>
                                    <td>{item.price}</td>
                                </tr>
                        )))
                            :
                       (
                        Data.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.phone}</td>
                                <td>{item.adress}</td>
                                <td>{item.item}</td>
                                <td>{item.number}</td>
                                <td>{item.price}</td>
                            </tr>
                       )
                        ))
                    }
                </table>
                <PaginationComponents itemsPerPage='5' totalItems={50}/>
            </div>
           
        </>
    )
}

export default TableRequestList;