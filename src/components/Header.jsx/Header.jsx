import React, { useState } from 'react'
import "./Header.scss"
import logo from "/assets/images/logo.svg"
import hamburgerMenu from "/assets/images/icon-hamburger-menu.svg";
import { Link } from 'react-router';

function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);


    return (
        <header className='header'>
            <div className="header__logo">
                <img src={logo} alt="" />
                {/* <h1>Healthy Recipe Finder</h1> */}
            </div>
            <button className="header__hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)}><img src={hamburgerMenu} alt="" /></button>
            <nav className={menuIsOpen ? "header__nav--open" : "header__nav--closed"}>
                <ul>
                    <li className='header__nav-item'>
                        <Link to={"/"}>Home</Link>    </li>
                    <li className='header__nav-item'>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to={"/recipes"} >Recipes</Link></li>
                    <button className='header__browse'>Browse Recipes</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header