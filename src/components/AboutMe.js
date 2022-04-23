import Profile from '../styles/Profile.jpg';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import React from 'react'

function AboutMe() {
    return (
        <Box style={{ width: '100vw', height: '100vh' }} >
            <Grid container spacing={4} justifyContent="center" sx={{ my: 12.5 }} >
                <Grid item xs={4} sx={{ width: 300, height: 300, my: 10 }}>
                    <Typography color='primary.main' variant='h1' sx={{ fontSize: 70 }}>
                        About me
                    </Typography>
                    <Box sx={{ my: 10 }}></Box>
                    <Typography color='primary.main' variant='p' sx={{ fontSize: 20 }}>
                        A passionate developer with a background in Mechanical Engineering, who chose to switch streams and follow his dreams.
                        I am an avid learner and seek challenges that will help me grow and strengthen my wide range of skills. Using the knowledge from my previous stream I am able to adapt and solve tough problems with ease and have a knack for finding patterns in code.
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{ width: 300, height: 300 }}>
                <img width="500px" src={Profile} alt='profile' />
            </Grid>
        </Grid>
        </Box >
    )
}

export default AboutMe