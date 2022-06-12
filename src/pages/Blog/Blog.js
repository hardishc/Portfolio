import { ThemeProvider, AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'
import { themeDark, themeDefault } from '../../styles/Style';
import * as React from 'react'
import BlogCard from '../../components/BlogComponents/BlogCard';
import BlogBanner from '../../components/BlogComponents/BlogBanner';
import { Link, BrowserRouter } from "react-router-dom";
import App from '../../App';


function Blog() {
    return (
        <ThemeProvider theme={themeDark}>
            <BrowserRouter>
                <Box sx={{ backgroundColor: "secondary.main", width: '100vw', height: '100vh', textAlign: 'center' }}>
                    <AppBar position="static">
                        <Toolbar sx={{ justifyContent: 'space-between', columnGap: 4 }}>
                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" sx={{ color: "text.primary" }}>
                                    Technology Blog
                                </Typography>
                            </Link>
                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button color="inherit" variant="outlined" size="small" sx={{ fontSize: '1.2em', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>Home</Button>
                            </Link>
                            <Link to="/home" element={<App/>} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ padding: '1rem', maxHeight: '2.2rem', maxWidth: { xs: '15%', sm: '15%', md: '10%', lg: '10%', xl: '12%' } }}>
                                    <Typography sx={{ fontSize: { xs: '70%', sm: '70%', md: '80%', lg: '80%', xl: '85%' } }}>
                                        Back to Portfolio
                                    </Typography></Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <BlogBanner />
                    <BlogCard />
                </Box >
            </BrowserRouter>
        </ThemeProvider >
    )
}

export default Blog;