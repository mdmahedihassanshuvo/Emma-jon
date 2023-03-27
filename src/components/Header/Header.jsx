import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <div>
                <a  href="/shop">Shop</a>
                <a  href="/order">Order</a>
                <a  href="/inventory">Inventory</a>
                <a  href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;