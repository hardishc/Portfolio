import { Grid, Button, AppBar, Link, Switch } from '@mui/material';
import React from 'react';
import { FaHackerrank } from 'react-icons/fa';
import { themeDefault, themeDark } from '../styles/Style';

var option = ["Home", "Skills", "Projects", "Contact"]

function NavBar({ setMode }) {

    const changeMode = (event) => {
        if (event.target.checked) {
            setMode(themeDark)
        } else {
            setMode(themeDefault)
        }
    }
    return (
        <AppBar sx={{ height: 100, justifyContent: "center" }}>
            <Grid container direction="row" justifyContent="center">
                <Grid container xs={1}>
                    <Link sx={{ color: "inherit" }} href="/"><FaHackerrank size={30} /></Link>
                </Grid>
                <Grid container xs={10} justifyContent="flex-end">
                    {/* <ButtonGroup variant="string" aria-label="outlined primary button group">
                            {option.map((page) => (
                                <Button key={page}>{page}</Button>
                            ))}
                        </ButtonGroup> */}
                    <Switch color="secondary"
                        onChange={changeMode}
                    ></Switch>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default NavBar
