// import React from 'react'
import Cards from "./Cards"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
// import { data } from "autoprefixer";
import Data from "./Data.js"
import BlogPage from "./BlogPage.jsx";




function Blogs() {
  
  const [searchTerm, setSearchTerm] = useState("");



  // const [filter, setFilter] = useState()
  // filter((Data) => !selectCategory || Data.category === selectCategory)


  // const handleChange = (e) => {
  //   setFilter({
  //     ...Data.category,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(Data.category)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(`Sending ${Data} to DataBase`)
  // }

  // // console.log(filter)
  // // console.log(setFilter)











    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBlogs = Data.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
        <div className="h-[auto] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-center items-center flex-col">
            <h1 className="text-4xl m-5 text-white">There are some latest blogs for you ....</h1>
            <div className="flex mb-12 relative">
                <input 
                    type="text" 
                    placeholder="Search here..." 
                    className="cursor-pointer bg-transparent border-2 border-white rounded-md p-1 text-white outline-none md:w-[20vw]"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="absolute right-0"><FaMagnifyingGlass className="text-white text-2xl m-2 font-bold" /></button>
            </div>
            <div className="flex justify-center items-center flex-wrap w-[85%] gap-3">
                <Cards blogs={filteredBlogs} />
            </div>
        </div>
    </>
);
}

export default Blogs;
