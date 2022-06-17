import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import * as React from 'react'
import { Link } from "react-router-dom";
import App from '../../App';

function BlogNavBar() {
    return (
        <AppBar position="static" sx={{ height: 80, justifyContent: "center" }}>
            <Toolbar sx={{ justifyContent: 'space-between', columnGap: 4 }}>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ color: "text.primary" }}>
                        Technology Blog
                    </Typography>
                </Link>
                <Link to="/blog" style={{ textDecoration: 'none', color: '#f3f3f3' }}>
                    <Button color="inherit" variant="outlined" size="small" sx={{ fontSize: '1.2em', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        Home
                    </Button>
                </Link>
                <Link to="/" element={<App />} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ maxHeight: '2.2rem', width: '100%' }}>
                        <Typography color="primary.lightText" sx={{ fontSize: { xs: '70%', sm: '70%', md: '80%', lg: '80%', xl: '85%' } }}>
                            Back to Portfolio
                        </Typography>
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default BlogNavBar