import React from 'react'
import { Box } from '@mui/system'

function BlogPage() {
  return (
    <ThemeProvider theme={themeDark}>
      <Box sx={{ backgroundColor: "white", width: '100vw', height: '100vh', textAlign: 'center' }}>
        <BlogNavBar />
        <Box sx={{ my: '5rem' }}>
         
        </Box>
      </Box >
    </ThemeProvider >
  )
}

export default BlogPage