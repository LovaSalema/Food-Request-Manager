import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
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
                            <NavLink to='/command'>
                                Commandes
                            </NavLink>
                            <NavLink to='/scantable'>
                                Scan table
                            </NavLink>
                        </ul>
                        <section
                            className="border-l-2 border-[#5eb5d7] pl-2 text-slate-800"
                        >
                            Table 1
                        </section>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default NavBar;