import React from 'react';
import { Link } from '@mui/material';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { List, ListItem, Box } from '@mui/material';
import './SideBar.css';

function SideBar() {

    return (
        <Box sx={{ position: 'fixed', height: '90%', display: { xs: 'none', sm: 'flex' } }}>
            <List sx={{ display: 'inline-block',    alignSelf: 'flex-end'}}>
                <ListItem  >
                    <Link sx={{ '&:hover': { borderLeft: 5 } }} href="http://www.instagram.com/hardish_c" target="_blank"><FaInstagram size={40} /></Link>
                </ListItem>
                <ListItem>
                    <Link sx={{ '&:hover': { borderLeft: 5 } }} href="https://github.com/hardishc" target="_blank"><FaGithub size={40} /></Link>
                </ListItem>
                <ListItem>
                    <Link sx={{ '&:hover': { borderLeft: 5 } }} href="https://www.linkedin.com/in/hardish-chander/" target="_blank"><FaLinkedin size={40} /></Link>
                </ListItem>
            </List>
        </Box >
    )
}

export default SideBar