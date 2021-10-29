import React from 'react'
import './Homepage.css';
import Topfold from '../../components/topfold';
import ExpenseList from '../../components/expense-list';

const Homepage = () => {
    return (
        <div className="homepage">
            <Topfold />
            <ExpenseList />
            
        </div>
    )
}

export default Homepage
