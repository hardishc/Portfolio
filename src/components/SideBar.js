import React from 'react';
import { Link } from '@mui/material';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './SideBar.css';

function SideBar() {

    return (
        <div className='side'>
            <List className='nav-menu'>
                <ListItem >
                    <Link sx={{'&:hover': { borderLeft: 5 }}}  href="http://www.instagram.com/hardish_c" target="_blank"><FaInstagram size={40} /></Link>
                </ListItem>
                <ListItem>
                    <Link sx={{'&:hover': { borderLeft: 5 }}} href="https://github.com/hardishc" target="_blank"><FaGithub size={40} /></Link>
                </ListItem>
                <ListItem>
                    <Link sx={{'&:hover': { borderLeft: 5 }}} href="https://www.linkedin.com/in/hardish-chander/" target="_blank"><FaLinkedin size={40} /></Link>
                </ListItem>
            </List>
        </div >
    )
}

export default SideBar