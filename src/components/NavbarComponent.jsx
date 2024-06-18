import { Link, NavLink } from "react-router-dom"
import { useState } from "react";

import logo from "../assets/images/logo.png"


// React Icons
import { FaFacebook, FaXmark } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function NavbarComponent() {

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen)
        // alert("Nav")
    }


    return (
        <>
            <nav className="flex justify-center items-center text-white ">

                <div className="mx-auto max-w-7xl h-[10vh] fixed top-0 flex justify-between items-center w-[85vw] px-5 z-10 bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                    <img src={logo} alt="" style={{ height: "9vh" }} />
                    <div className="justify-between w-[60%] hidden md:inline-flex">
                        <ul className="flex justify-center items-center gap-4 font-semibold">
                            <NavLink to="/" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Home</NavLink>
                            {/* <Link to="/About" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">About</Link> */}
                            <NavLink to="/Blogs" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Blogs</NavLink>
                            <NavLink to="/Write" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Write</NavLink>
                            <NavLink to="/Contact" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800
                            ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}
                            `}>Contact</NavLink>
                        </ul>

                        <ul className="flex justify-center items-center gap-3 font-semibold">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaTwitter /></li>
                            <NavLink to="/Regester"
                                className={({ isActive }) => `${isActive ? "text-red-700 border-b-2 pb-2" : "text-gray-800"}`}>
                                <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg ">Register</button>
                            </NavLink>
                            <NavLink to="/Login"
                                className={({ isActive }) => `${isActive ? "text-red-700 border-b-2 pb-2" : "text-gray-800"}`}>
                                <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg ">Login</button>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleNav} className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1">
                            {
                                navOpen ? <FaXmark /> : <FaBars />
                            }
                        </button>
                    </div>

                </div>

                <div className={`py-4 justify-between md:hidden bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-20
                ${navOpen ? "block top-16 fixed w-[85%]" : "hidden"}`}
                >
                    <ul className="flex justify-center items-center gap-2 font-semibold flex-col">
                        <Link to="/" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Home</Link>
                        <Link to="/About" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">About</Link>
                        <Link to="/Blogs" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Blogs</Link>
                        <Link to="/Write" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Write</Link>
                        <Link to="/Contact" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800">Contact</Link>
                    </ul>

                    <ul className="flex justify-center items-center gap-4 font-semibold flex-col">
                        <span className="flex">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaTwitter /></li>
                        </span>
                        <Link to="/Regester"><button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg ">Register</button></Link>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default NavbarComponent
