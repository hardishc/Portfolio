import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './SideBar.css';

function SideBar() {

    return (
        <div className='side'>
            <ul className='nav-menu'>
                <li>
                    <FaInstagram size={30} />
                </li>
                <li>
                    <FaGithub size={30} />
                </li>
                <li>
                    <FaLinkedin size={30} />
                </li>
            </ul>
        </div>
    )
}

export default SideBar