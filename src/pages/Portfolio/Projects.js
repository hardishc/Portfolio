import {Box, Card, Grid, CardContent, Typography, Link, Paper} from '@mui/material';
import React from 'react';

const projects = [
    {
        title: 'Feel-Good-First Fitness Platform',
        description: 'Fitness platform for a Vancouver based client built from scratch using MERN stack. CRUD functionality using REST API. Argon2 for password encryption. Redux toolkit and RTK Query used for state management. Deployment on AWS E3.',
        status: '',
        link: 'https://github.com/hardishc/Portfolio'
    },
    {
        title: 'Developer Portfolio',
        description: 'Github Portfolio built using React and Material-UI',
        status: 'Click to view',
        link: 'https://github.com/hardishc/Portfolio'
    },
    {
        title: 'Assignment Collaborator',
        description: ' Assignment Collaborator Platform for students to manage their group and personal assignments',
        status: 'Work in Progress',
        link: '/'
    },
    {
        title: 'Photography Portfolio',
        description: 'Personal Photography Portfolio website made using React',
        status: 'Work in Progress',
        link: '/'
    }
]

function Projects() {
    return (
        <Box id="projects" bgcolor="background.paper" sx={{minWidth: '100vw', minHeight: '90vh'}}>
            <Typography sx={{fontSize: 60, textAlign: 'center', paddingTop: 5, paddingBottom: 15}}
                        color="secondary.main" gutterBottom>
                Projects
            </Typography>
            <Box sx={{
                display: 'flex',
                maxWidth: '80vw',
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                columnGap: 20,
                rowGap: 5
            }}>
                {projects.map((project, index) => (
                    <Link color="inherit" underline="none" href={project.link} target="_blank" key={index}>
                        <Card sx={{
                            backgroundColor: "primary.main",
                            display: 'inline-block',
                            textAlign: 'center',
                            maxWidth: 350,
                            '&:hover': {boxShadow: 20}
                        }}>
                            <CardContent>
                                <Typography sx={{fontSize: 12}} color="primary.lightText" gutterBottom>
                                    {project.status}
                                </Typography>
                                <Typography variant="h5" component="div" color="primary.lightText">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="primary.lightText" style={{marginTop: 10}}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Box>
        </ Box>

    )
}

export default Projects