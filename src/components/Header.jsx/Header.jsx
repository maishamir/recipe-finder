import React, { useState } from 'react'
import "./Header.scss"
import logo from "/assets/images/logo.svg"
import hamburgerMenu from "/assets/images/icon-hamburger-menu.svg";
import { Link, useNavigate } from 'react-router';

function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <header className='header'>
            <div className="header__logo">
                <img src={logo} alt="" onClick={() => navigate("/")} />
            </div>
            <button className="header__hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)}><img src={hamburgerMenu} alt="" /></button>
            <nav className={menuIsOpen ? "header__nav--open" : "header__nav--closed"}>
                <ul>
                    <li className='header__nav-item'>
                        <Link to={"/"}>Home</Link>    </li>
                    <li className='header__nav-item'>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <button className='header__browse'>Browse Recipes</button>
                </ul>
            </nav>

            <nav className='header__menu'>
                <ul>
                    <li className='header__menu-item'>Home</li>
                    <li className='header__menu-item'>About</li>
                    <li className='header__menu-item'>Recipes</li>
                </ul>

            </nav>

            <button className='header__browseRecipes'>Browse Recipes</button>

        </header>
    )
}

export default Header