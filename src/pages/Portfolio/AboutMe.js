import Profile from '../../styles/Profile.jpg';
import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';

function AboutMe() {
    return (
        <Box id="about" bgcolor="background.paper" alignItems='center' color='primary.main' sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <Box display='flex' justifyContent='space-evenly' alignItem='center' sx={{ maxWidth: { xs: '80vw', sm: '70vw' }, margin: '0 auto', flexWrap: 'wrap' }}>
                <Box sx={{ width: { xs: '100%', lg: '40%' } }}>
                    <Typography color='primary.darkText' sx={{ fontSize: { xs: 40, sm: 60 } }}>
                        About me
                    </Typography>
                    <Typography align="left" color='primary.darkText'  sx={{ fontSize: { xs: 18, sm: 22 }, lineHeight: { xs: 1.5, sm: 2 } }}>
                        <p>A passionate developer with a background in Mechanical Engineering, who chose to switch streams and follow his dreams.
                            I am an avid learner and seek challenges that will help me grow and strengthen my wide range of skills. Using the knowledge from my previous stream I am able to adapt and solve tough problems with ease and have a knack for finding patterns in code.</p>
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src={Profile} alt='profile' sx={{ width: { xs: '300px', sm: '400px', lg: '500px' } }}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMe