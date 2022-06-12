import React from 'react'
import { Box, Paper, Card, CardContent, Typography, ThemeProvider, Grid, AppBar } from '@mui/material'

function BlogCard() {
    return (
        <Card sx={{ backgroundColor: "primary.main", display: 'inline-block', paddingInline: 5, width: { xs: 200, sm: 400, lg: 500, xl: 600 }, '&:hover': { boxShadow: 20 } }} >
            <CardContent>
                <Grid container spacing={{ xs: 6, md: 6 }}>
                    <Grid item>
                        <Box component="img"
                            sx={{
                                height: '100%',
                                width: '100%',
                                opacity: 0.9,
                                borderRadius: '5%'
                            }}
                            alt="blog-image"
                            src="https://www.howtogeek.com/wp-content/uploads/2012/12/Advanced-Settings-W10-1.png?width=235&height=130&fit=crop&trim=2,2,2,2">
                        </Box>
                    </Grid>
                    <Grid item xs={1} >
                        <Typography sx={{ fontSize: 12 }} color="primary.lightText">
                            safd
                        </Typography>
                        <Typography variant="h5" color="primary.lightText">
                            sadf
                        </Typography>
                        <Typography variant="body2" color="primary.lightText" style={{ marginTop: 10 }}>
                            sadf
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default BlogCard