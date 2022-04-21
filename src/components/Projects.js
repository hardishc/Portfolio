import { Button, Box, Card, Grid, CardContent, Typography } from '@mui/material'
import React from 'react'

function Projects() {
    return (
        <Box style={{ width: '100vw', height: '80vh', }}>
            <Typography sx={{ fontSize: 60 }} color="primary.main" gutterBottom>
                Projects
            </Typography>
            <Box sx={{ my: 20 }}></Box>
            <Grid container spacing={5} >
                <Grid item xs={1.5}>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Click to view
                            </Typography>
                            <Typography variant="h5" component="div">
                                Developer Portfolio
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">

                            </Typography>
                            <Typography variant="body2">
                                Github Portfolio built using React and Material-UI
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Work in Progress
                            </Typography>
                            <Typography variant="h5" component="div">
                                Assignment Collaborator
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">

                            </Typography>
                            <Typography variant="body2">
                                Assignment Collaborator Platform for students to manage their group as well as personal assignments
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Work in Progress
                            </Typography>
                            <Typography variant="h5" component="div">
                                Personal Photography Portfolio
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">

                            </Typography>
                            <Typography variant="body2">
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