import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {motion, useScroll} from "framer-motion"
import Gradient from 'rgt'
import '../../App.css';

function HomePage(mode) {
    const [currentMode, setMode] = useState(mode)

    useEffect(() => {
        setMode(mode)
    }, [mode]);

    return (
        <Box sx={{minWidth: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            <Grid container spacing={1} alignItems="center" justifyContent="flex-start"
                  sx={{my: 10, mx: {xs: 5, sm: 10}, height: {xs: '70vh', sm: '80vh', md: '100vh'}}}>
                <Grid item xs={1} align="left" sx={{width: 300, display: {xs: 'none', sm: 'block'}}}>
                </Grid>
                {currentMode.mode === 'dark' ?
                    <Grid item xs={7} align="left" sx={{
                        width: 300
                    }}>
                        <motion.div
                            initial={{translateX: -100}}
                            animate={{translateX: 0}}
                            transition={{
                                type: "spring",
                                damping: 5,
                                mass: 0.75,
                                stiffness: 50,
                            }}>
                            <Typography sx={{fontSize: 40}}>
                                <Gradient dir={'right-to-left'} from={'rgba(124,109,80,255)'} to={'rgba(69, 71, 74)'}>
                                    Hello! I am -
                                </Gradient>
                            </Typography>
                        </motion.div>
                        <Typography sx={{fontSize: {xs: 40, sm: 70}}}>
                            <Gradient dir={'right-to-left'} from={'rgba(124,109,80,255)'} to={'rgba(69, 71, 74)'}>
                                Hardish
                            </Gradient>
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
                            <Typography sx={{fontSize: {xs: 20, sm: 50}}}>
                                <Gradient dir={'right-to-left'} from={'rgba(255,199,95,1)'} to={'rgba(69, 71, 74)'}>
                                    Canada based Full-Stack Developer
                                </Gradient>
                            </Typography>
                        </motion.div>
                    </Grid>


                    :


                    <Grid item xs={7} align="left" sx={{
                        width: 300
                    }}>
                        <motion.div
                            initial={{translateX: -100}}
                            animate={{translateX: 0}}
                            transition={{
                                type: "spring",
                                damping: 5,
                                mass: 0.75,
                                stiffness: 50,
                            }}>
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
                    </Grid>}
            </Grid>
        </Box>
    )
}

export default HomePage