import React, { useState } from "react"
const LoginContainer = () => {
    const [show, setShow]=useState(false)
    return (
        <>
            <div
                className="h-screen flex  justify-center items-center bg-[#b6bf89]"
            >
                
                    
                    <div
                        className="p-2 gap-2 w-[27%] flex flex-col  bg-[#f7f7f690] rounded-md border"
                    >

                        <p className="text-slate-800 font-bold m-3">Se connecter</p>

                        <form
                            className=" p-6 flex flex-col gap-3"
                        >
                            <div
                                className="flex flex-col gap-2"
                            >
                                <label className="text-sm text-slate-800 font-bold" htmlFor="email">Nom d'utilisateur ou email</label>
                                <input className=" py-1  rounded-md bg-transparent border  border-slate-400 outline-none text-sm" type="text"  name="perfectMoney" />
                            </div>
                            <div
                                className="flex flex-col gap-2"
                            >
                                <label className="text-sm text-slate-800 font-bold" htmlFor="perfectMoney">Mot de passe</label>
                                <input className="py-1 text-sm rounded-md  p-1 bg-transparent border border-slate-400 outline-none  " type={show? "text" :"password"}  name="password" />
                            </div>
                            <div className="flex flex-row gap-2 justify-between mt-2">

                                <a href="#">
                                    <p className="text-xs text-slate-900 underline"><b>Mot de passe oublié?</b></p>
                                </a>
                                <div className="flex flex-row-reverse gap-2">
                                    <input onClick={()=>setShow(!show)} type="checkbox" />
                                    <p className="text-xs text-slate-800"></p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col gap-4 mt-2"
                            >
                                <button
                                    type="submit"
                                    className="py-1 px-3 bg-green-500 text-white rounded-md hover:bg-green-400"
                                >
                                    <b>sign in</b>
                                </button>
                                <button
                                    className="py-1 px-3 bg-slate-600 text-white rounded-md hover:bg-slate-500"
                                    type="reset"
                                >
                                    <b>cancel</b>
                                </button>
                            </div>
                            <div className="flex flex-row gap-2 mt-2 justify-center">
                                <p className="text-xs text-slate-800">Voilour collaborer avec nous?</p>
                                <a href="#">
                                    <p className="text-xs text-slate-900 underline"><b>s'inscrire</b></p>
                                </a>
                            </div>

                        </form>
                    </div>
                
            </div>
        </>
    )
}
export default LoginContainer;