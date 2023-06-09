import React from "react"
const SignUp = () => {
    return (
        <>
            <div
                className="h-screen flex  justify-center items-center bg-slate-50"
            >
                
                    {/* <div
                        className="w-[150px] h-[150px] bg-cyan-600 absolute top-0 ml-[218px] mt-[70px]  "
                        style={{borderRadius: ' 0 6px 0 100%'}}
                    >
                    </div> */}
                    <div
                        className="p-2 gap-4 w-[27%] flex flex-col  bg-slate-600 rounded-md"
                    >

                        <p className="text-white text-lg m-3">Sign up?</p>

                        <form
                            className=" p-6 flex flex-col gap-4"
                        >
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">Perfect money account :</label>
                                <input className=" p-1  rounded-sm bg-slate-50 border-b border-slate-800 outline-none " type="text" placeholder="your perfect money address" name="perfectMoney" />
                            </div>
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">UserAgent :</label>
                                <input className=" p-1  rounded-sm bg-slate-50 border-b border-slate-800 outline-none " type="text" placeholder="your useragent" name="perfectMoney" />
                            </div>
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">Password :</label>
                                <input className=" rounded-sm  p-1 bg-white border-b border-slate-800 outline-none " type="password" placeholder="your password" name="password" />
                            </div>
                            <div
                                className="flex flex-col gap-4"
                            >
                                <label className="text-sm text-white" htmlFor="perfectMoney">Confirm password :</label>
                                <input className=" rounded-sm  p-1 bg-white border-b border-slate-800 outline-none " type="password" placeholder=" confirm your password" name="password" />
                            </div>
                            <div className="flex flex-row gap-2 justify-end">

                                
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
                                    className="py-1 px-3 bg-slate-900 text-white rounded-md hover:bg-slate-800"
                                >
                                    <b>sign up</b>
                                </button>
                                <button
                                    className="py-1 px-3 bg-slate-400 text-white rounded-md hover:bg-slate-300"
                                    type="reset"
                                >
                                    <b>cancel</b>
                                </button>
                            </div>
                            <div className="flex flex-row gap-2">
                                <p className="text-xs text-white">I already have an account!</p>
                                <a href="#">
                                    <p className="text-xs text-slate-900 underline"><b>sign in?</b></p>
                                </a>
                            </div>

                        </form>
                    </div>
                
            </div>
        </>
    )
}
export default SignUp;