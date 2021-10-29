import React from 'react'
import './header.css';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={logo} alt="stash logo" className="logo" />
            </div>
            
        </div>
    )
}

export default Header
