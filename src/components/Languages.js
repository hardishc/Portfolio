import React from 'react'
import { Stack, Card, Tooltip } from '@mui/material'
import { DiJava, DiJavascript1, DiReact } from 'react-icons/di';

function Languages() {

    var iconSize = 100
    const languages = [{
        comp: <DiJava size={iconSize} />,
        name: "Java",
    },
    {
        comp: <DiJavascript1 size={iconSize} />,
        name: "JavaScript",
    },
    {
        comp: <DiReact size={iconSize} />,
        name: "React",
    }]

    return (
        <Stack direction="row" spacing={2}>
            <Card>
                {languages.map((lang) => (
                    <Tooltip key={lang.comp} title={lang.name}><span>{lang.comp}</span></Tooltip>
                ))}
            </Card>
        </Stack>
    )
}

export default Languages
