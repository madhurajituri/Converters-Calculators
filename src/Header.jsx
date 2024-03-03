import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-full items-center z-50 fixed top-0" >
            <nav className=" bg-black/60 flex h-10 justify-center items-center">
                <h1 className="text-white fixed font-mono">Convertify<span className="text-red-500 font-mono"> %</span></h1>
                <Link to="/" className="fixed text-white font-mono right-3">Home</Link>
            </nav>
        </div >
    )
}

export default Header;