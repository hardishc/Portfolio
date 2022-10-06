import '../../App.css';
import {React, useState, useEffect} from 'react';
import {Box, ThemeProvider, Paper} from '@mui/material';
import {themeDark, themeDefault} from '../../styles/Style';
import ScrollToTop from "react-scroll-to-top";
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Languages from './Languages';
import Projects from './Projects';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import {ReactComponent as Arrow} from "../../styles/arrow.svg";
import '../../styles/arrow.css'

function LandingPage() {
    const [mode, setMode] = useState(themeDefault);

    useEffect(() => {
        document.title = "Hardish GitHub Portfolio"
    }, []);
    return (
        <Box sx={{overflow: 'hidden'}}>
            <ScrollToTop
                id={"svg"}
                smooth={true}
                component={<Arrow/>}
                style={{
                    width: '60px',
                    height: '60px'
                }}/>
            <ThemeProvider theme={mode}>
                <Box sx={{backgroundSize: 'cover'}} style={mode.palette.styles}>
                    <NavBar setMode={setMode} mode={mode}/>
                    <Box sx={{
                        display: {md: 'flex', xs: 'none'},
                        justifyContent: 'end',
                        position: 'fixed',
                        my: 'auto',
                        flexDirection: 'column',
                        height: '90vh'
                    }}>
                        <SideBar/>
                    </Box>
                    <HomePage/>
                </Box>
                <AboutMe/>
                <Languages/>
                <Projects/>
            </ThemeProvider>
        </Box>
    )
}

export default LandingPage