import { ThemeProvider, Box } from '@mui/material'
import { themeDark } from '../../styles/Style';
import * as React from 'react'
import BlogCard from '../../components/BlogComponents/BlogCard';
import BlogCard2 from '../../components/BlogComponents/BlogCard2';
import BlogBanner from '../../components/BlogComponents/BlogBanner';
import BlogNavBar from '../../components/BlogComponents/BlogNavBar';
import BlogFooter from '../../components/BlogComponents/BlogFooter';

function Blog() {
    return (
        <ThemeProvider theme={themeDark}>
            <Box sx={{ backgroundColor: "white", width: '100vw', height: '100vh', textAlign: 'center', overflowY: 'scroll' }}>
                <BlogNavBar />
                <BlogBanner />
                <BlogCard />
                <Box><BlogCard2 /></Box>                
                <BlogFooter />
            </Box >
        </ThemeProvider >
    )
}

export default Blog;