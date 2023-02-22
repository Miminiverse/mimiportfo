import React from "react";
import {
    AiOutlineSearch,
  } from "react-icons/ai";


export default function InputWithLabel ({id, value, type="text", onSearchInput, onSearchSubmit, }) {

    return (
        <>

            <div className="max-w-6xl text-center mx-auto px-12 pt-12 pb-6">
            <form onSubmit={onSearchSubmit}>
            <h3 className="text accent text-underline">What's news for today?</h3>

            <input 
            className=" p-2 border border-gray-300 rounded-lg mr-4 text-center"
            id={id} 
            type={type}
            value={value}
            onChange={onSearchInput}
            placeholder="Search news"
            />
            <button
            type="submit"
            >
            <AiOutlineSearch className="pt-2" size={30}/>
            </button>
            <p className="italic text-black pt-2"> Click the title for more information</p>
        </form>
            </div>

        </>
    )
}