import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import Navbar from './Navbar'


const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <div>
                        <Link to={"/"}>
                            <img src={logo} alt="logoImg" height={77} width={77}/>
                        </Link>
                          {/* Navabar desktop */}
                        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
                        {/* Navabar mobile */}
                        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header