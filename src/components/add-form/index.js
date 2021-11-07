import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './add-form.css';
import { FaChevronDown } from "react-icons/fa";
import { FaPlusCircle} from "react-icons/fa";
import { catergories } from '../../constants/add-expense'
import { addExpense } from '../../redux/actions/expenses';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./success-modal";

const AddForm = () => {
    const cat = catergories;
    const [categoryOpen, setCategoryOpen]= useState(false)
    const [title, setTitle]= useState('')
    const [amount, setAmount]= useState('')
    const [category, setCategory]= useState() 
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

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
    const handleCategory=(category)=>{
        setCategory(category)
        setCategoryOpen(false)
    }
    toast.configure()
    const handleSubmit= ()=>{
        if(title===''||amount===""||!category){
            const notify = () => toast("Please enter valid information!", {
               position: toast.POSITION.BOTTOM_LEFT, autoClose:5000});
            notify();
            return;
        };
        const data = {
            title,
            amount,
            category,
            createdAt: new Date(),
          };
          console.log("here");
        dispatch(addExpense(data));
        setModalOpen(!modalOpen);
        
    };
    return (
        <div className="add-form">
        <SuccessModal modalOpen={modalOpen} />
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
                    <div className="catergory-dropdown" onClick={()=>setCategoryOpen(!categoryOpen)}>
                        <label>{category?category.title:"Category"}</label>
                    <FaChevronDown />
                    </div>
                    {categoryOpen&&<div className="category-container">
                        {cat.map(category=>(
                            <div className="category-item" style={{
                                borderRight:`5px solid ${category.color}`
                            }} key={category.id} onClick={()=>handleCategory(category)} >
                                <label>{category.title}</label>
                                <img src={category.icon.default} alt={category.title} />
                            </div>
                        ))}
                        </div>}

                </div>
                
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <FaPlusCircle/>
                    <label>Add</label>
                        
                </div>
            </div>
        </div>
    )
}

export default AddForm
