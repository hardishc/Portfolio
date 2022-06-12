import React from 'react'
import { Card, Box, Avatar } from '@mui/material'

const bannerImages = [
    {
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'Technology Banner1'
    },
    {
        src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'Technology Banner2'
    },
    {
        src: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80',
        alt: 'Technology Banner3'
    },
    {
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        alt: 'Technology Banner4'
    }
]

function BlogBanner() {
    return (
        <Box>
            {bannerImages.map((image) => (
                <Box component="img"
                    sx={{
                        height: 400,
                        width: '25%',
                        maxHeight: { xs: 150, md: 200, lg: 250, xl: 300 },                        
                        opacity: 0.9,
                    }}
                    alt={image.alt}
                    src={image.src}
                >
                </Box>
            ))}
        </Box>
    )
}

export default BlogBanner