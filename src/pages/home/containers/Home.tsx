import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
    return (
        <>
            <Navbar/>
            <div
                className="h-screen flex justify-center items-center bg-slate-300"
            >
                <div
                    className="flex flex-col gap-6"
                >
                    <div
                        className="flex gap-3 flex-row justify-center items-center"
                    >
                        <img className="w-20" src="/assets/img/dice3DB&W.png" alt="bg" />
                        <p className="font-serif text-center text-gray-500 text-3xl">Dice Strategy in Script</p>
                    </div>
                    <div className="flex gap-10 w-full justify-center">
                        <button className="py-1 px-3 bg-slate-800 text-white rounded-md hover:bg-slate-700">
                            <p className="text-lg">Get started</p>
                        </button>
                        <button className="py-1 px-3 bg-slate-500 text-white rounded-md hover:bg-slate-400">
                            <p className="text-lg">Tutorial</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;