import { Toolbar, Button, AppBar, Switch, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { FaHackerrank } from 'react-icons/fa';
import { themeDefault, themeDark } from '../styles/Style';
import { HashLink as HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

var option = [
    {
        id: 1,
        name: "Home",
        link: "#"
    },
    {
        id: 2,
        name: "About",
        link: "#about"
    },
    {
        id: 3,  
        name: "Skills",
        link: "#skills"
    },
    {
        id: 4,
        name: "Projects",
        link: "#projects"
    }
]

function NavBar({ setMode }) {

    const changeMode = (event) => {
        if (event.target.checked) {
            setMode(themeDark)
        } else {
            setMode(themeDefault)
        }
    }
    return (
        <AppBar sx={{ height: 80, justifyContent: "center" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', columnGap: 4 }}>
                <HashLink style={{ color: '#FFF' }} to="#" smooth><FaHackerrank size={30} /></HashLink>
                <ButtonGroup variant="string" aria-label="outlined primary button group">
                    {option.map((page, idx) => (
                        <HashLink to={page.link} style={{ color: '#FFF' }} key={page.id} smooth>
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
                    <Button variant='contained' color="primary" sx={{height: '2rem'}}>
                        <Typography color="primary.lightText">
                            Blog
                        </Typography>
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar
