import { Grid, Button, AppBar, Switch, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { FaHackerrank } from 'react-icons/fa';
import { themeDefault, themeDark } from '../styles/Style';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

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

function NavBar({ setMode }) {

    const changeMode = (event) => {
        if (event.target.checked) {
            setMode(themeDark)
        } else {
            setMode(themeDefault)
        }
    }
    return (
        <BrowserRouter>
            <AppBar sx={{ height: 100, justifyContent: "center" }}>
                <Grid container direction="row" justifyContent="center">
                    <Grid container xs={1}>
                        <Link style={{ color: '#FFF' }} to="#" smooth><FaHackerrank size={30} /></Link>
                    </Grid>
                    <Grid container xs={10} justifyContent="flex-end">
                        <ButtonGroup variant="string" aria-label="outlined primary button group">

                            {option.map((page) => (
                                <Link to={page.link} style={{ color: '#FFF' }} smooth>
                                    <Button>
                                        <Typography color="primary.lightText">
                                            {page.name}
                                        </Typography>
                                    </Button>
                                </Link>
                            ))}
                            <Button>
                                <Typography color="primary.lightText">
                                    Blog
                                </Typography>
                            </Button>
                        </ButtonGroup>
                        <Switch
                            onChange={changeMode}
                        ></Switch>
                    </Grid>
                </Grid>
            </AppBar>
        </BrowserRouter>
    )
}

export default NavBar
