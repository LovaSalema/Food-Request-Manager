const Register = () => {
    return (
        <>
            <div
                className="w-full h-screen bg-[#f5f7f9] flex flex-col items-center justify-center "
            >
                <div
                    className=" w-[80%] flex flex-col items-center "
                >
                    <div
                        className="w-full flex justify-between"
                    >
                        <h1
                            className="font-mono font-bold text-[#2d1967] text-xl"
                        >
                            Register
                        </h1>
                        <p
                            className="font-mono font-bold text-[#2d1967] text-xl"
                        >Dashboard</p>
                    </div>
                    <div
                        className="w-full  bg-white rounded-xl flex justify-center m-10"
                    >
                        <div
                            className="flex flex-col w-[40%] m-4 border border-[#2d19675d] rounded-[5px]"
                        >
                            <div
                                className="bg-[#2d1967] w-full py-3 flex flex-row justify-center"
                            >
                                <h2 className="text-white font-mono font-bold ">Register</h2>
                            </div>
                            <form
                                className="flex flex-col gap-5 mt-4 m-6"

                            >
                                <input
                                    type='text'
                                    className="outline-none p-3 rounded-sm text-xs"
                                    placeholder="Full name"
                                    style={{ border: '1px solid rgba(128, 128, 128, 0.112)' }}
                                />
                                <input
                                    type='text'
                                    className="outline-none p-3 rounded-sm text-xs"
                                    placeholder="Enter your mail"
                                    style={{ border: '1px solid rgba(128, 128, 128, 0.112)' }}
                                />
                                <input
                                    type='password'
                                    className="outline-none p-3 rounded-sm text-xs"
                                    placeholder="Password"
                                    style={{ border: '1px solid rgba(128, 128, 128, 0.112)' }}
                                />
                                <div
                                    className="flex flex-row-reverse gap-2"
                                >
                                    <input
                                        type='checkbox'
                                    />
                                    <p
                                        className="text-slate-400 text-xs"
                                    >Keep me up to date</p>
                                </div>
                                <input type="submit" value='Sign up' className="bg-[#2d1967] text-white py-2 rounded-[5px] font-mono font-bold" />
                            </form>
                            <p className="text-slate-400 text-xs text-center m-3">
                                Need an account?<a href="#a" className="text-xs font-bold ml-2"><b>Log in</b></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;