import axios from "axios";
import React, {useEffect, useState, useCallback} from "react";
import InputWithLabel from './InputWithLabel';

const Search  = () => {
    const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
    const [searchList, setSearchList] = useState([]) 
    const [searchText, setSearchText] = useState(localStorage.getItem('search'))
    const [url, setUrl] = useState(`${API_ENDPOINT}${searchText}`)

    useEffect(() => {
        localStorage.setItem('search', searchText)
    })


    function handleSearchInput (e) {
        setSearchText(e.target.value)
    }

    function handleSearchSubmit(e) {
        e.preventDefault()
        setUrl(`${API_ENDPOINT}${searchText}`)
        setSearchText('')
    }

    const handleSearch = useCallback( async () => {
        const result = await axios.get(url)
        console.log(result.data.hits)
        setSearchList(result.data.hits)
    }, [url]
    )

    useEffect (() => {
        handleSearch();
    },  [handleSearch]
    )


    return (
        <>
        <InputWithLabel 
        id="search"
        value={searchText}
        setSearchText = {setSearchText}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
        />
        <div className="max-w-6xl mx-auto text-center">
            {searchList.slice(0,5).map ((item)=> (
                <ul
                key={item.objectID}
                >
                <a 
                className="no-underline pr-4 inline-block text-accent hover:text-yellow-400 text-center"
                href={item.url}
                target="_blank"
                >{item.title}</a> ---
                <strong>{item.author}</strong>---
                </ul>
            ))}
        </div>
        </>
    )
}

export default Search