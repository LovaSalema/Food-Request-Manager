import React from "react";
import '../css/menu.css';
import Card from "../components/Card";
const MenusContainer = () => {
    return (
        <>
            <div
                className=" flex h-screen w-full bg-[#b6bf89] p-auto justify-center"
            >
                <div
                    className="mt-0 mb-0 bg-white/200 w-full flex justify-center"
                >

                    <div
                        className="w-[35%] h-auto transparent rounded-md m-auto p-3 flex flex-col"
                    >
                        <div
                            className="flex flex-col gap-3"
                        >
                            <div
                                className="flex flex-row"
                            >
                                <input
                                    type="text"
                                    className="outline-none border text-md px-2 py-1 mx-2 transparent rounded-sm"
                                    placeholder="Recherche..."
                                />
                                <div>

                                </div>
                            </div>
                            <div
                                className=" flex flex-col gap-4 "
                            >
                                <Card path='./assets/img/kalibg.jpg' />

                                <Card path='./assets/img/kalibg.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MenusContainer;