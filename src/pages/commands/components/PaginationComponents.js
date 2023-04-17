import { useState } from "react";
import useTableRequestList from '../hooks/useTableRequestList'
import React from "react";
 const PaginationComponents =({itemsPerPage, totalItems})=>{
    const pageNumbers=[];
    for(let i=1; i<Math.ceil(itemsPerPage/totalItems); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers);
    return (
        <>
        <nav className="bg-red-600 w-9 h-auto">
            <ul className="flex flex-row gap-2 bg-slate-200">
                {[1,2,3,4,5,6,7,8,9].map(
                    (page)=>(
                        <li className="px-2 h-auto bg-slate-600">
                            <a href="#a">
                                {page}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </nav>
        </>
    )
}
export default PaginationComponents;

