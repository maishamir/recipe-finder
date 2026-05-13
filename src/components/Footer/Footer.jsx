import React from 'react'
import instaIcon from "/assets/images/icon-instagram.svg"
import blueskyIcon from "/assets/images/icon-bluesky.svg"
import tiktokIcon from "/assets/images/icon-tiktok.svg"
import "./Footer.scss"


function Footer() {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <img src={instaIcon} alt="" />
                </li>
                <li>
                    <img src={blueskyIcon} alt="" />
                </li>
                <li>
                    <img src={tiktokIcon} alt="" />
                </li>
            </ul>

            <p className='footer__credit'>Made with ❤️ and 🥑</p>
        </footer>
    )
}

export default Footer