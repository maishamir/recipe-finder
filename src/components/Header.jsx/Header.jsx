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
                {/* <h1>Healthy Recipe Finder</h1> */}
            </div>
            <button className="header__hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)}><img src={hamburgerMenu} alt="" /></button>
            <nav className={menuIsOpen ? "header__nav--open" : "header__nav--closed"}>
                <ul>
                    <li className='header__nav-item'>
                        <Link to={"/"} scroll={false}>Home</Link>    </li>
                    <li className='header__nav-item'>
                        <Link to={'/about'} scroll={false}>About</Link>
                    </li>
                    <button className='header__browse'>Browse Recipes</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header