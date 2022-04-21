import Profile from '../styles/Profile.jpg';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import React from 'react'

function AboutMe() {
    return (
        <Box style={{ width: '100vw', height: '100vh' }} >
            <Box sx={{ my: 15 }}></Box>
            <Typography sx={{ fontSize: 60, textAlign: 'center' }} color="primary.main" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ my: 12.5 }} >
                <Grid item xs={4} sx={{ width: 300, height: 300, my: 10 }}>
                    <h1>Myself Pandurang</h1>
                    <p>eggs allow</p>
                </Grid>
                <Grid item xs={4} sx={{ width: 300, height: 300 }}>
                    <img width="400px" src={Profile} alt='profile' />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe