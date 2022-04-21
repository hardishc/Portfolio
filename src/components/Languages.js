import { React } from 'react'
import { Stack, Box, Tooltip } from '@mui/material'
import { DiJava, DiJavascript1, DiReact, DiCss3, DiHtml5, DiNodejs, DiPython } from 'react-icons/di';
import { SiMaterialui, SiOracle, SiMongodb, SiMicrosoftazure } from 'react-icons/si';
import { bgcolor } from '@mui/system';

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
        <Box>
            <h1 style={{fontSize: 60}}>Skills</h1>
            <Box sx={{ my: 10 }}></Box>
            <Stack direction="row" spacing={6}>
                {frontEnd.map((lang) => (
                    <Tooltip key={lang.comp} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                ))}
            </Stack>
            <Box sx={{ my: 10 }}></Box>
            <Stack direction="row" spacing={6}>
                {backEnd.map((lang) => (
                    <Tooltip key={lang.comp} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                ))}
            </Stack>
            <Box sx={{ my: 10 }}></Box>
            <Stack direction="row" spacing={6}>
                {dbHost.map((lang) => (
                    <Tooltip key={lang.comp} title={lang.name}><Box borderBottom={4} sx={{ '&:hover': { boxShadow: 20 } }}>{lang.comp}</Box></Tooltip>
                ))}
            </Stack>
        </Box>
    )
}

export default Languages
