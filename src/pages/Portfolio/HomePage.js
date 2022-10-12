import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {motion, useScroll} from "framer-motion"
import '../../App.css';

function HomePage() {
    return (
        <Box sx={{minWidth: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            <Grid container spacing={1} alignItems="center" justifyContent="flex-start"
                  sx={{my: 10, mx: {xs: 5, sm: 10}, height: {xs: '70vh', sm: '80vh', md: '100vh'}}}>
                <Grid item xs={1} align="left" sx={{width: 300, display: {xs: 'none', sm: 'block'}}}>
                </Grid>
                <Grid item xs={7} align="left" sx={{width: 300}}>
                    <motion.div
                        initial={{translateX: -100}}
                        animate={{translateX: 0}}
                        transition={{
                            type: "spring",
                            damping: 5,
                            mass: 0.75,
                            stiffness: 50,
                        }}
                    >
                        <Typography color='primary.lightText' sx={{fontSize: 40}}>
                            Hello! I am -
                        </Typography>
                    </motion.div>
                    <Typography color='primary.lightText' sx={{fontSize: {xs: 40, sm: 70}}}>
                        Hardish
                    </Typography>
                    <motion.div
                        initial={{translateX: -100}}
                        animate={{translateX: 0}}
                        transition={{
                            type: "spring",
                            damping: 5,
                            mass: 0.75,
                            stiffness: 50,
                        }}
                    >
                        <Typography color='primary.lightText' sx={{fontSize: {xs: 20, sm: 50}}}>
                            Canada based Full-Stack Developer
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage