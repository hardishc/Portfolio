import { React } from 'react';
import { Typography, Stack, Box, Tooltip, Paper,Grid } from '@mui/material';
import { DiJava, DiJavascript1, DiReact, DiCss3, DiHtml5, DiNodejs, DiPython } from 'react-icons/di';
import { SiMaterialui, SiOracle, SiMongodb, SiMicrosoftazure } from 'react-icons/si';

function Languages() {
    var iconSize = 100

    const frontEnd = [
        {
            id: 1,
            comp: <DiJavascript1 size={iconSize} />,
            name: "JavaScript",
        },
        {
            id: 2,
            comp: <DiReact size={iconSize} />,
            name: "React",
        },
        {
            id: 3,
            comp: <DiCss3 size={iconSize} />,
            name: "CSS",
        },
        {
            id: 4,
            comp: <DiHtml5 size={iconSize} />,
            name: "HTML",
        },
        {
            id: 5,
            comp: <SiMaterialui size={iconSize} />,
            name: "MaterialUI",
        },
    ]

    const backEnd = [{
        id: 1,
        comp: <DiJava size={iconSize} />,
        name: "Java",
    },
    {
        id: 2,
        comp: <DiNodejs size={iconSize} />,
        name: "NodeJS",
    },
    {
        id: 3,
        comp: <DiPython size={iconSize} />,
        name: "Python",
    },
    {
        id: 4,
        comp: <DiJavascript1 size={iconSize} />,
        name: "JavaScript",
    },
    ]

    const dbHost = [{
        id: 1,
        comp: <SiOracle size={iconSize} />,
        name: "Oracle SQL",
    },
    {
        id: 2,
        comp: <SiMongodb size={iconSize} />,
        name: "MongoDB",
    },
    {
        id: 3,
        comp: <SiMicrosoftazure size={iconSize} />,
        name: "Azure",
    },]


    return (
            <Paper id="skills" style={{ width: '100vw', height: '100vh'}} >
                <Grid container spacing={4} justifyContent="center" >
                    <Box sx={{ my: 15 }}>
                        <Typography sx={{ fontSize: 60, textAlign: 'center' }} color="secondary.main" gutterBottom>
                            Skills
                        </Typography>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack direction="row" color="secondary.main" spacing={6}>
                            {frontEnd.map((lang, idx) => (
                                <Tooltip key={lang.id} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack color="secondary.main" direction="row" spacing={6}>
                            {backEnd.map((lang, idx) => (
                                <Tooltip key={lang.id} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack color="secondary.main" direction="row" spacing={6}>
                            {dbHost.map((lang, idx) => (
                                <Tooltip key={lang.id} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                    </Box>
                </Grid>
            </Paper>
    )
}

export default Languages
