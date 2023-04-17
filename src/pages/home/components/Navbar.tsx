import React from "react"
const Navbar = () => {
    return (
        <>
            <div
                className="bg-slate-800 h-18 w-full flex justify-between items-center pl-5 pr-5"
            >
                <div>
                    <a href="#">
                        <img className="w-14" src="/assets/img/dice-logo.png" alt="" />
                    </a>
                </div>
                <div className="flex justify-evenly h-8 gap-4">
                    <button className="py-1 px-3 bg-slate-300 text-white rounded-md hover:bg-slate-200">
                        <p className="text-sm">Sign in</p>
                    </button>
                    <button className="py-1 px-3 bg-slate-500 text-white rounded-md hover:bg-slate-400">
                        <p className="text-sm">Sign up</p>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Navbar