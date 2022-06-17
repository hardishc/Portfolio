import React from 'react'
import { Box, Toolbar, Typography, Button } from '@mui/material'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

function BlogFooter() {
    return (
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(71,82,133,0.72)' }}>
            <Toolbar sx={{ justifyContent: 'center', columnGap: 4, height: '40px', padding: '10px' }}>
                <a style={{color:'navy'}} href="http://www.instagram.com/hardish_c" target="_blank"><FaInstagram size={40} /></a>
                <a style={{color:'navy'}} href="https://github.com/hardishc" target="_blank"><FaGithub size={40} /></a>
                <a style={{color:'navy'}} href="https://www.linkedin.com/in/hardish-chander/" target="_blank"><FaLinkedin size={40} /></a>
            </Toolbar>
        </Box>
    )
}

export default BlogFooter