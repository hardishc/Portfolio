import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material';
import '../App.css';

function HomePage() {
return (
    <div className="main">
        <Paper sx={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <Box style={{ width: '100vw', height: '100vh', }} >
                <Grid container spacing={4} alignItems="center" justifyContent="flex-start" sx={{ my: 12.5, mx: 10, height: '100vh' }} >
                    <Grid item xs={1} align="left" sx={{ width: 300, height: 400, my: 10 }}>
                    </Grid>
                    <Grid item xs={5} align="left" sx={{ width: 300, height: 400, my: 10 }}>
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
                </Grid>
            </Box>
        </Paper>
    </div>
)
}

export default HomePage