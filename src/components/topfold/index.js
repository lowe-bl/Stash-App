import React, {useState} from 'react'
import './topfold.css';
import { FaSearch} from "react-icons/fa";
import { FaPlusCircle} from "react-icons/fa";
import { FaArrowCircleLeft} from "react-icons/fa";
import { FaTimesCircle} from "react-icons/fa";

const Topfold = () => {
    const [query, setQuery]= useState("")
    const handleQuery = (e)=>{
        setQuery(e.target.value);

    }
    return (
        <div className="topfold"> 
        {window.location.pathname==='/' ? (
        <div className="home-topfold">
                <div className="searchbar">
                    <FaSearch />
                    <input placeholder="Search for expenses" 
                    value={query}
                    onChange={(e)=>handleQuery(e)} />
                </div>
                <div className="add-button">
                    <FaPlusCircle/>
                    <label>Add</label>
                </div>
            </div>
            ) : (
                <div className="add-topfold">
                    <div className="add-topfold-button"> 
                    <FaArrowCircleLeft/>
                    <label>Back</label>
                    </div>
                    <div className="add-topfold-button">
                    <FaTimesCircle/>
                    <label>Cancel</label>
                    </div>
                </div>

            )}
        </div>
    
    )}

export default Topfold
