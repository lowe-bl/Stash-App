import React, { useState } from 'react'
import './add-form.css';
import { FaChevronDown } from "react-icons/fa";
const AddForm = () => {
    const [title, setTitle]= useState('')
    const [amount, setAmount]= useState('')
    const [category, setCategory]= useState() 

    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleAmount=(e)=>{
         const val = parseFloat(e.target.value)   
         if(isNaN(val)){
             setAmount('')
             return
         }
         setAmount(val)
    }
    return (
        <div className="add-form">
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Describe your expense" 
                value={title} 
                onChange={(e)=>handleTitle(e)}  />
            </div>
            <div className="form-item">
                <label>Amount $</label>
                <input placeholder="Enter Amount" 
                value={amount} className="amount-input"
                onChange={(e)=>handleAmount(e)}  />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div>
                        <label>Category</label>
                    <FaChevronDown />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default AddForm
