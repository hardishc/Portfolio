import { Grid, Button, AppBar, Switch, ButtonGroup } from '@mui/material';
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
        link: "#About"
    },
    {
        name: "Skills",
        link: "#Skills"
    },
    {
        name: "Projects",
        link: "#Projects"
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
                        <Link sx={{ color: "inherit" }} to="#/"><FaHackerrank size={30} /></Link>
                    </Grid>
                    <Grid container xs={10} justifyContent="flex-end">
                        <ButtonGroup variant="string" aria-label="outlined primary button group">
                            <Button>
                                {option.map((page) => (
                                    <Link to={page.link} smooth>{page.name}</Link>
                                ))}
                            </Button>
                        </ButtonGroup>
                        <Switch color="secondary"
                            onChange={changeMode}
                        ></Switch>
                    </Grid>
                </Grid>
            </AppBar>
        </BrowserRouter>
    )
}

export default NavBar
