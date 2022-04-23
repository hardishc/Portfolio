import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import '../App.css';
import { themeDefault, themeDark } from '../styles/Style';

function HomePage() {

    return (
        <Box style={{ width: '100vw', height: '100vh' }} >
            <Grid container spacing={4} alignItems="center" justifyContent="flex-start" sx={{ my: 12.5, mx: 10, height: '100vh' }} >
                <Grid item xs={1} align="left" sx={{ width: 300  }}>
                </Grid>
                <Grid item xs={7} align="left" sx={{ width: 300 }}>
                    <Typography color='primary.lightText' variant='h2' sx={{ fontSize: 40 }} >
                        Hello! I am -
                    </Typography>
                    <Typography color='primary.lightText' variant='h1' sx={{ fontSize: 70 }}>
                        Hardish
                    </Typography>
                    <Typography color='primary.lightText' variant='p' sx={{ fontSize: 50 }} >
                        Canada based Full-Stack Developer
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage