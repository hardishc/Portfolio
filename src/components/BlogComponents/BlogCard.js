import React from 'react'
import { Box, Paper, Card, CardContent, Typography, ThemeProvider, Grid, AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import BannerImage from '../../pages/Blog/BlogPost1Assets/Express.jpg'

function BlogCard() {
    return (
        <Link to="blog1">
            <Card sx={{ my: '3rem', backgroundColor: "primary.main", display: 'inline-block', paddingInline: 5, width: { xs: 200, sm: 400, lg: 500, xl: 600 }, '&:hover': { boxShadow: 20 } }} >
                <CardContent>
                    <Grid container spacing="1">
                        <Grid item sm={6} md={4}>
                            <Box component="img"
                                sx={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    opacity: 0.9,
                                    borderRadius: '5%'
                                }}
                                alt="blog-image"
                                src={BannerImage}>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={8} >
                            <Typography variant="h5" color="primary.lightText">
                                Blog Post 1
                            </Typography>
                            <Typography variant="h6" color="primary.lightText">
                                Routing in NodeJS vs ExpressJS
                            </Typography>
                            <Typography variant="body2" color="primary.lightText" style={{ marginTop: 10 }}>
                                By Hardish
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>
    )
}

export default BlogCard