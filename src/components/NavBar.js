import { Grid, Button, ButtonGroup, AppBar } from '@mui/material'
import React from 'react'
import { FaHackerrank } from 'react-icons/fa';

var option = ["Home", "Skills", "Projects", "Contact"]
function NavBar() {
    return (
        <div>
            <AppBar sx={{ height: 100, justifyContent: "center" }}>
                <Grid container direction="row" justifyContent="center">
                    <Grid container xs={1}>
                        <FaHackerrank size={30} />
                    </Grid>
                    <Grid container xs={10} justifyContent="flex-end">
                        <ButtonGroup variant="string" aria-label="outlined primary button group">
                            {option.map((page) => (
                                <Button key={page}>{page}</Button>
                            ))}
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </AppBar>
        </div >
    )
}

export default NavBar
