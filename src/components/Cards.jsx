// import img from "../assets/images/img.jpg"
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../components/Data.js"
import { FaUser } from "react-icons/fa6";

function Cards({blogs, selectCategory}) {
    
    return (
        <>
            {
                Data.splice(0,12).map((val, index) => {
                    return (
                        <>
                            <div id={index} className="card w-64 m-2 shadow-md hover:shadow-gray-200 rounded-2xl">
                                <img src={val.image} alt="" className="h-1/2 border-t-1 rounded-t-2xl"/>

                                <div className=" bg-white p-2 border-b-0 rounded-b-2xl">
                                    <h1 className="text-black font-semibold pt-3">{val.title}</h1>
                                    <span className="flex justify-start items-center pt-2">
                                    <FaUser />
                                    <p className="text-left text-xl font-semibold pl-2">{val.author}</p>
                                    </span>
                                    <p className=" py-2">Published on : {val.published_date}</p>
                                    <Link to="/Blogs">Read more....</Link>
                                </div>

                            </div>
                        </>
                    )
                })
            }

        </>
    )
}



export default Cards
