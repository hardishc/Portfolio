import { Box, Card, Grid, CardContent, Typography, Link } from '@mui/material'
import React from 'react'

function Projects() {
    return (
        <Box style={{ width: '100vw', height: '80vh', }}>
            <Typography sx={{ fontSize: 60, textAlign: 'center'}} color="primary.darkText" gutterBottom>
                Projects
            </Typography>
            <Box sx={{ my: 20 }}></Box>
            <Grid container spacing={5} >
                <Grid item xs={1.5}>
                </Grid>
                <Grid item xs={3}>
                    <Link color="inherit" underline="none" href="https://github.com/hardishc/Portfolio" target="_blank">
                        <Card sx={{backgroundColor:"primary.main" ,'&:hover': { boxShadow: 20 }}} >
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="primary.lightText" gutterBottom>
                                    Click to view
                                </Typography>
                                <Typography variant="h5" component="div" color="primary.lightText">
                                    Developer Portfolio
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="primary.lightText">

                                </Typography>
                                <Typography variant="body2" color="primary.lightText">
                                    Github Portfolio built using React and Material-UI
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{backgroundColor:"primary.main" ,'&:hover': { boxShadow: 20 }}} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary.lightText" gutterBottom>
                                Work in Progress
                            </Typography>
                            <Typography variant="h5" component="div" color="primary.lightText">
                                Assignment Collaborator
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="primary.lightText">

                            </Typography>
                            <Typography variant="body2" color="primary.lightText">
                                Assignment Collaborator Platform for students to manage their group as well as personal assignments
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{backgroundColor:"primary.main" ,'&:hover': { boxShadow: 20 }}} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary.lightText" gutterBottom>
                                Work in Progress
                            </Typography>
                            <Typography variant="h5" component="div" color="primary.lightText">
                                Personal Photography Portfolio
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="primary.lightText">

                            </Typography>
                            <Typography variant="body2" color="primary.lightText">
                                Personal Photography Portfolio website made using React
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1.5}>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects