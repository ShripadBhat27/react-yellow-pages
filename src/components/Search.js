import React from 'react'
import SearchBar from "./SearchBar";
import BuisnessData from "./Data.json";
import Footer from './Footer';
import Navbar from './Navbar';
import './Search.css';


export const Search = () => {
  return (
      <div className='search'>
        <Navbar />
        <div className='search_container'>
            <div className='SearchBar'>
                <SearchBar placeholder="Search a Local Buisness" data={BuisnessData} />
            </div>
        </div>
        <Footer />
      </div>
  )
}

export default Search;
