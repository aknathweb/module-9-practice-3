import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to={'/orders'}>Orders</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};

export default Header;