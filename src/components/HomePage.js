import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import '../App.css';

function HomePage() {
    return (
        <Box style={{ width: '100vw', height: '100vh' }} >
            <Grid container spacing={4} alignItems="center" justifyContent="flex-start" sx={{ my: 12.5, mx: 10, height: '100vh' }} >
                <Grid item xs={1} align="left" sx={{ width: 300, height: 400, my: 10 }}>
                </Grid>
                <Grid item xs={7} align="left" sx={{ width: 300, height: 400, my: 10 }}>
                    <Typography variant='h2' sx={{ fontSize: 40 }} >
                        Hello! I am -
                    </Typography>
                    <Typography variant='h1' sx={{ fontSize: 70 }}>
                        Hardish
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: 50 }} >
                        Canada based Full-Stack Developer
                    </Typography>
                </Grid>
                <Button><Grid item xs={6} align="left" sx={{ width: 200, height: 500, my: 10 }}></Grid></Button>
            </Grid>
        </Box>
    )
}

export default HomePage