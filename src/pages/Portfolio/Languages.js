import {React} from 'react';
import {Typography, Stack, Box, Grid, CardContent, Card, Divider} from '@mui/material';
import {ReactComponent as JavaScript} from "../../styles/js.svg";
import {ReactComponent as ReactLogo} from "../../styles/react.svg";
import {ReactComponent as CSS} from "../../styles/css.svg";
import {ReactComponent as HTML} from "../../styles/html.svg";
import {ReactComponent as MUI} from "../../styles/mui.svg";
import {ReactComponent as ANT} from "../../styles/ant.svg";
import {ReactComponent as Java} from "../../styles/java.svg";
import {ReactComponent as Node} from "../../styles/node.svg";
import {ReactComponent as Python} from "../../styles/python.svg";
import {ReactComponent as Oracle} from "../../styles/oracle.svg";
import {ReactComponent as MongoDB} from "../../styles/mongodb.svg";
import {ReactComponent as AWS} from "../../styles/aws.svg";

function Languages() {

    const frontEnd = [
        {
            comp: <JavaScript/>,
            name: "JavaScript",
        },
        {
            comp: <ReactLogo/>,
            name: "React",
        },
        {
            comp: <CSS/>
            ,
            name: "CSS",
        },
        {
            comp: <HTML/>,
            name: "HTML",
        },
        {
            comp: <MUI/>
            ,
            name: "MaterialUI",
        },
        {
            comp: <ANT/>
            ,
            name: "Ant Design",
        },
    ]

    const backEnd = [{
        comp: <Java/>
        ,
        name: "Java",
    },
        {
            comp: <Node/>,
            name: "NodeJS",
        },
        {
            comp: <Python/>,
            name: "Python",
        },
    ]

    const dbHost = [{
        comp: <Oracle/>
        ,
        name: "Oracle SQL",
    },
        {
            comp: <MongoDB/>,
            name: "MongoDB",
        },
        {
            comp: <AWS/>
            ,
            name: "AWS",
        },]


    return (
        <Box id="skills" bgcolor="background.paper" sx={{minWidth: '100vw', minHeight: '100vh'}}>
            <Grid container spacing={4} justifyContent="center">
                <Box sx={{my: 15}}>
                    <Typography sx={{fontSize: {xs: 40, sm: 60}, textAlign: 'center'}} color="secondary.main"
                                gutterBottom>
                        Skills
                    </Typography>
                    <Box sx={{my: 10}}></Box>
                    <Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '5rem'}}>
                        {frontEnd.map((lang, idx) => (
                            <Card key={idx} sx={{
                                width: {xs: '10rem', md: '15rem'},
                                bgcolor: 'text.secondary',
                                transition: 'transform 330ms ease-in-out',
                                '&:hover': {
                                    boxShadow: '#00ff62 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                    transform: 'scale(1.25)'
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{borderBottom: 'solid'}}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'end',
                                            justifyContent: 'space-around',
                                            marginBottom: '5px'
                                        }}>
                                            {lang.comp}
                                            <Typography>{lang.name}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <Box sx={{my: 10}}></Box>
                    <Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '5rem'}}>
                        {backEnd.map((lang, idx) => (
                            <Card key={idx} sx={{
                                width: {xs: '10rem', sm: '15rem'},
                                bgcolor: 'text.secondary',
                                transition: 'transform 330ms ease-in-out',
                                '&:hover': {
                                    boxShadow: '#00ff62 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                    transform: 'scale(1.25)'
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{borderBottom: 'solid'}}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'end',
                                            justifyContent: 'space-around',
                                            marginBottom: '5px'
                                        }}>
                                            {lang.comp}
                                            <Typography>{lang.name}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <Box sx={{my: 10}}></Box>
                    <Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '5rem'}}>
                        {dbHost.map((lang, idx) => (
                            <Card key={idx} sx={{
                                width: {xs: '10rem', sm: '15rem'},
                                bgcolor: 'text.secondary',
                                transition: 'transform 330ms ease-in-out',
                                '&:hover': {
                                    boxShadow: '#00ff62 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                    transform: 'scale(1.25)'
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{borderBottom: 'solid'}}>
                                        <Box sx={{
                                            display: 'flex', alignItems: 'end', justifyContent: 'space-around',
                                            marginBottom: '5px'
                                        }}>
                                            {lang.comp}
                                            <Typography>{lang.name}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default Languages
