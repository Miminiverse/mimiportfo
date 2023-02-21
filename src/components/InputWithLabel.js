import React from "react";
import {
    AiOutlineSearch,
  } from "react-icons/ai";


export default function InputWithLabel ({id, value, type="text", onSearchInput, onSearchSubmit, }) {


    return (
        <>

            <div className="max-w-6xl text-center mx-auto px-10 py-20">
            <form onSubmit={onSearchSubmit}>
            <h3 className="text accent ">What's news for today?</h3>
            <input 
            className=" p-2 border border-gray-300 rounded-lg mr-4 text-center"
            id={id} 
            type={type}
            value={value}
            onChange={onSearchInput}
            />

            
            <button
            type="submit"
            >
            <AiOutlineSearch className="pt-2" size={30}/>
            </button>
        </form>
            </div>

        </>
    )
}