import React, {useState} from 'react'
import './topfold.css';
import { FaSearch} from "react-icons/fa";
import { FaPlusCircle} from "react-icons/fa";
import { FaArrowCircleLeft} from "react-icons/fa";
import { FaTimesCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const Topfold = () => {
    const [query, setQuery]= useState("")
    const dispatch = useDispatch();
    const handleQuery = (e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));

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
                <Link to='/add-expense'>
                <div className="add-button">
                    <FaPlusCircle/>
                    <label>Add</label>
                </div>
                </Link>
            </div>
            ) : (
                <div className="add-topfold">
                    <Link to='/'>
                    <div className="add-topfold-button"> 
                    <FaArrowCircleLeft/>
                    <label>Back</label>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className="add-topfold-button">
                    <FaTimesCircle/>
                    <label>Cancel</label>
                    </div>
                    </Link>
                </div>

            )}
        </div>
    
    )}

export default Topfold
