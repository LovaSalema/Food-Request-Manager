import React from "react"
const LoginContainer = () => {
    return (
        <>
            <div
                className="h-screen flex  justify-center items-center bg-[#b6bf89]"
            >
                
                    
                    <div
                        className="p-2 gap-2 w-[27%] flex flex-col  bg-[#edf6bf7e] rounded-md border"
                    >

                        <p className="text-white text-lg m-3">Sign in?</p>

                        <form
                            className=" p-6 flex flex-col gap-6"
                        >
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">Email :</label>
                                <input className=" py-2  rounded-sm bg-transparent border-b border-slate-800 outline-none text-sm" type="text" placeholder="your email" name="perfectMoney" />
                            </div>
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">Password :</label>
                                <input className="py-2 text-sm rounded-sm  p-1 bg-transparent border-b border-slate-800 outline-none  " type="password" placeholder="your password" name="password" />
                            </div>
                            <div className="flex flex-row gap-2 justify-between">

                                <a href="#">
                                    <p className="text-xs text-slate-900 underline"><b>I forgot my password!</b></p>
                                </a>
                                <div className="flex flex-row-reverse gap-2">
                                    <input type="checkbox" />
                                    <p className="text-xs text-white"><b>Show password</b></p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col gap-4"
                            >
                                <button
                                    type="submit"
                                    className="py-1 px-3 bg-green-700 text-white rounded-md hover:bg-green-600"
                                >
                                    <b>sign in</b>
                                </button>
                                <button
                                    className="py-1 px-3 bg-slate-400 text-white rounded-md hover:bg-slate-300"
                                    type="reset"
                                >
                                    <b>cancel</b>
                                </button>
                            </div>
                            <div className="flex flex-row gap-2">
                                <p className="text-xs text-white">I don't have an account!</p>
                                <a href="#">
                                    <p className="text-xs text-slate-900 underline"><b>sign up?</b></p>
                                </a>
                            </div>

                        </form>
                    </div>
                
            </div>
        </>
    )
}
export default LoginContainer;