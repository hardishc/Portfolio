import { ThemeProvider, Box } from '@mui/material'
import { themeDark } from '../../styles/Style';
import * as React from 'react'
import BlogCard from '../../components/BlogComponents/BlogCard';
import BlogBanner from '../../components/BlogComponents/BlogBanner';
import BlogNavBar from '../../components/BlogComponents/BlogNavBar';

function Blog() {
    return (
        <ThemeProvider theme={themeDark}>
            <Box sx={{ backgroundColor: "white", width: '100vw', height: '100vh', textAlign: 'center' }}>
                <BlogNavBar />
                <BlogBanner />
                <Box sx={{my: '5rem'}}>
                    <BlogCard />
                </Box>
        </Box >
        </ThemeProvider >
    )
}

export default Blog;