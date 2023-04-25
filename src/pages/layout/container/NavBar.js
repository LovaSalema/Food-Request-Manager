import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../menus/context/MenuContext";
const NavBar = () => {
    const {command}=useGlobalContext();
    return (
        <>
            <nav
                className="bg-slate-50 shadow-md"
            >
                <div
                    className="flex flex-row gap-4 py-2 px-2 w-full justify-between"
                >
                    <div
                        className="flex flex-col"
                    >
                        <img src="" alt="" />
                        <p className="font-bold text-slate-800">LOGO</p>
                    </div>
                    <div
                        className="flex flex-row gap-4 text-slate-800 font-medium"
                    >
                        <ul
                            className="flex flex-row gap-4"
                        >
                            <NavLink to="/">
                                Menu
                            </NavLink>
                            <NavLink className='flex flex-row gap-1' to='/command'>
                                Commandes
                                {command.length>0? <div className="w-5 h-5 rounded-full bg-red-600 text-center text-white font-bold text-sm">
                                    {command.length}
                                </div> : ''}
                            </NavLink>
                            <NavLink to='/scantable'>
                                Scan table
                            </NavLink>
                        </ul>
                        <section
                            className="border-l-2 border-[#5eb5d7] pl-2 text-slate-800"
                        >
                           <NavLink to='/login'>
                                Admin
                           </NavLink>
                        </section>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default NavBar;