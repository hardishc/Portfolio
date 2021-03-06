import { React } from 'react';
import { Typography, Stack, Box, Tooltip, Paper,Grid } from '@mui/material';
import { DiJava, DiJavascript1, DiReact, DiCss3, DiHtml5, DiNodejs, DiPython } from 'react-icons/di';
import { SiMaterialui, SiOracle, SiMongodb, SiMicrosoftazure } from 'react-icons/si';

function Languages() {
    var iconSize = 100

    const frontEnd = [
        {
            comp: <DiJavascript1 size={iconSize} />,
            name: "JavaScript",
        },
        {
            comp: <DiReact size={iconSize} />,
            name: "React",
        },
        {
            comp: <DiCss3 size={iconSize} />,
            name: "CSS",
        },
        {
            comp: <DiHtml5 size={iconSize} />,
            name: "HTML",
        },
        {
            comp: <SiMaterialui size={iconSize} />,
            name: "MaterialUI",
        },
    ]

    const backEnd = [{
        comp: <DiJava size={iconSize} />,
        name: "Java",
    },
    {
        comp: <DiNodejs size={iconSize} />,
        name: "NodeJS",
    },
    {
        comp: <DiPython size={iconSize} />,
        name: "Python",
    },
    {
        comp: <DiJavascript1 size={iconSize} />,
        name: "JavaScript",
    },
    ]

    const dbHost = [{
        comp: <SiOracle size={iconSize} />,
        name: "Oracle SQL",
    },
    {
        comp: <SiMongodb size={iconSize} />,
        name: "MongoDB",
    },
    {
        comp: <SiMicrosoftazure size={iconSize} />,
        name: "Azure",
    },]


    return (
            <Paper id="skills" style={{ width: '100vw', height: '100vh'}} >
                <Grid container spacing={4} justifyContent="center" >
                    <Box sx={{ my: 15 }}>
                        <Typography sx={{fontSize: { xs: 40, sm: 60 }, textAlign: 'center' }} color="secondary.main" gutterBottom>
                            Skills
                        </Typography>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack direction="row" color="secondary.main" spacing={6}>
                            {frontEnd.map((lang, idx) => (
                                <Tooltip key={idx} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack color="secondary.main" direction="row" spacing={6}>
                            {backEnd.map((lang,idx) => (
                                <Tooltip key={idx} title={lang.name}><Box borderBottom={4} sx={{ size: 20, '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                        <Box sx={{ my: 10 }}></Box>
                        <Stack color="secondary.main" direction="row" spacing={6}>
                            {dbHost.map((lang, idx) => (
                                <Tooltip key={idx} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                            ))}
                        </Stack>
                    </Box>
                </Grid>
            </Paper>
    )
}

export default Languages
