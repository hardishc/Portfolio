import {AppBar, Button, ButtonGroup, SwipeableDrawer, Switch, Toolbar, Typography, List, ListItem, Box } from '@mui/material';
import React, {useState} from 'react';
import {FaHackerrank} from 'react-icons/fa';
import {BsChevronBarLeft} from "react-icons/bs";
import {RiMenuFill} from "react-icons/ri";
import {themeDark, themeDefault} from '../styles/Style';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import SideBar from "./SideBar";

var option = [
    {
        name: "Home",
        link: "#"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Skills",
        link: "#skills"
    },
    {
        name: "Projects",
        link: "#projects"
    }
]

function NavBar({ setMode, mode }) {

    const [open, setOpen] = useState(false)
    const [currentMode, setcurrentMode] = useState('Dark')

    const changeMode = (event) => {
        if (mode === themeDefault) {
            setMode(themeDark)
            setcurrentMode('Light')
        } else {
            setMode(themeDefault)
            setcurrentMode('Dark')
        }
    }

    return (
        <>
            <AppBar sx={{ height: 80, justifyContent: "center" }}>
                <Toolbar sx={{ justifyContent: 'space-around', columnGap: 4,display: { md: 'flex', xs: 'none' } }}>
                    <HashLink style={{ color: '#FFF'}} to="#" smooth><FaHackerrank size={30} /></HashLink>
                    <ButtonGroup variant="string" aria-label="outlined primary button group">
                        {option.map((page, index) => (
                            <HashLink to={page.link} style={{ color: '#FFF' }} key={index} smooth>
                                <Button>
                                    <Typography color="primary.lightText">
                                        {page.name}
                                    </Typography>
                                </Button>
                            </HashLink>
                        ))}
                        <Switch
                            onChange={changeMode}
                        ></Switch>
                    </ButtonGroup>
                    <Link to="/blog">
                        <Button variant='contained' color="primary" sx={{ height: '2rem' }}>
                            <Typography color="primary.lightText">
                                Blog
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
                <Box sx={{display: { md: 'none', xs: 'block' }}}>
                    <Button onClick={()=> setOpen(true)} sx={{color:'primary.lightText'}}><RiMenuFill size={30}/></Button>
                </Box>
            </AppBar >
            <SwipeableDrawer anchor="left" open={open} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)} PaperProps={{sx:{backgroundColor:'#0D0D0D'}}} sx={{color:'red' , display: { md: 'none', xs: 'block' }}}>
                <Button onClick={()=> setOpen(false)} sx={{color:'primary.lightText'}}><BsChevronBarLeft size={30}/></Button>
                <ButtonGroup variant="string" aria-label="outlined primary button group">
                    <List>
                        <ListItem>
                            <Button variant={"contained"}
                                onClick={changeMode}
                            ><Typography color="primary.lightText">{currentMode} Mode</Typography></Button>
                        </ListItem>
                        {option.map((page, index) => (
                            <ListItem>
                                <HashLink to={page.link} style={{ color: '#FFF' }} key={index} smooth>
                                    <Button>
                                        <Typography color="primary.lightText">
                                            {page.name}
                                        </Typography>
                                    </Button>
                                </HashLink>
                            </ListItem>
                        ))}
                    </List>
                </ButtonGroup>
                <List>
                    <ListItem>
                        <Link to="/blog">
                            <Button variant="contained" color="primary" sx={{ height: '2rem' }}>
                                <Typography color="primary.lightText">
                                    Go to Blog
                                </Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <SideBar />
                    </ListItem>
                </List>
            </SwipeableDrawer>

        </>
    )
}

export default NavBar
