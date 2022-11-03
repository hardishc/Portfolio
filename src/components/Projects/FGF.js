import React from 'react'
import {Box, ThemeProvider, Typography} from "@mui/material";
import {themeDark, themeDefault} from "../../styles/Style";
import LandingVideo from './FGF/Landing Page.webm'
import LoginModal from './FGF/Login.webm'
import Dashboard from './FGF/Dashboard.webm'
import UserManagement from './FGF/UserManagement.webm'
import Messages from './FGF/Messages.webm'
import EditProfile from './FGF/EditProfile.webm'
import UserProgress from './FGF/UserProgress.webm'
import NavBar from "../NavBar";
import {styled} from "@mui/system";
import {motion} from 'framer-motion'

function FGF() {

    const xsSize = '350px';
    const smSize = '600px';
    const mdSize = '1000px';

    const StyledVideo = styled('video')`
      ${props => props.theme.breakpoints.up("xs")} {
        width: ${xsSize};
      }

      ${props => props.theme.breakpoints.up("sm")} {
        width: ${smSize};
      }

      ${props => props.theme.breakpoints.up("md")} {
        width: ${mdSize};
      }
    `

    return (
        <ThemeProvider theme={themeDefault}>
            <NavBar></NavBar>
            <Box sx={{
                // background: 'linear-gradient(180deg, rgba(245,212,233,1) 50%, rgba(221,221,221,0) 100%)',
                background: 'url(https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)',
                height: '20rem',
                pt: '10rem'
            }}>
                <Box sx={{
                    backdropFilter: 'blur(100px)',
                    padding: '2rem',
                    width: '60vw',
                    margin: '0 auto',
                }}>
                    <Typography variant={'h3'} textAlign={'center'}>
                        Feel Good First - Holistic Platform
                    </Typography>
                    <Typography variant={'caption'}
                                paddingBottom={'4rem'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                        Streamlined Women's Health & Fitness platform for a Vancouver based client.
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <strong>Technologies and Frameworks Used:</strong>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography>
                            <ul>
                                <li>MERN Stack</li>
                                <li>Database functionality using Mongoose</li>
                                <li>RESTful API for CRUD functionality</li>
                                <li>Redux toolkit and RTK Query for state management.</li>
                                <li>Argon2 for password hashing</li>
                            </ul>
                        </Typography>
                        <Typography>
                            <ul>
                                <li>ExpressJS Middleware for data validation</li>
                                <li>Multer S3 for image storage</li>
                                <li>Ant Design & Material UI for React UI components</li>
                                <li>Formik for front-end form validation</li>
                                <li>Framer motion for animation</li>
                            </ul>
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display: 'inline'}}>
                    <Box id={'landPage'} my={'5rem'} sx={{
                        background: 'linear-gradient(450deg, #A5C4D4 -57%, rgba(221,221,221,0) 100%)'
                    }}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>Landing Page of the
                            website</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <StyledVideo di={'land'} controls>
                                <source src={LandingVideo} type="video/webm"/>
                            </StyledVideo>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '0rem', lg: '5rem'}}}>Designed in Figma
                                    and
                                    implemented using Ant
                                    Design.
                                    Landing page has an About section which describes the client, Testimonial section
                                    with a
                                    slider
                                    effect and Services section to show all the available services provided.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Box>

                    <Box id={'loginModal'} my={'5rem'}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>Login Modal</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                    Login Modal with Forgot password functionality.
                                    Our client wanted to manually create accounts for their clients so no Create an
                                    Account
                                    functionality
                                    on the modal is implemented.
                                </Typography>
                            </motion.div>
                            <StyledVideo di={'login'} controls>
                                <source src={LoginModal} type="video/webm"/>
                            </StyledVideo>
                        </Box>
                    </Box>

                    <Box id={'dashboard'} my={'5rem'} sx={{
                        background: 'linear-gradient(450deg, #A5C4D4 -57%, rgba(221,221,221,0) 100%)'
                    }}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>Dashboard</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <StyledVideo id='dash' controls>
                                <source src={Dashboard} type="video/webm"/>
                            </StyledVideo>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                    This is the dashboard for admin.
                                    Here admin can view new consultation requests, monthly earnings and total number of
                                    users
                                    along with task progress and revenue graph.
                                    Tasks are shown in the Calendar component.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Box>

                    <Box id={'userMan'} my={'5rem'}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>User
                            Management</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                    This is the user management panel for admin.
                                    Here admin can check all the new consultation requests. This is how admin can create
                                    new
                                    accounts by accepting the invite.
                                    Admin can also edit users here as well as view their progress logs.
                                </Typography>
                            </motion.div>
                            <StyledVideo id='user' controls>
                                <source src={UserManagement} type="video/webm"/>
                            </StyledVideo>
                        </Box>
                    </Box>

                    <Box id={'messages'} my={'5rem'} sx={{
                        background: 'linear-gradient(450deg, #A5C4D4 -57%, rgba(221,221,221,0) 100%)'
                    }}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>Messages</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <StyledVideo id='msg' controls>
                                <source src={Messages} type="video/webm"/>
                            </StyledVideo>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                    From the message panel, admin can send private message or broadcast message to all
                                    the
                                    users.
                                    Users can only reply to the message sent to them.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Box>

                    <Box id={'editProfile'} my={'5rem'}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>Account Settings/Edit
                            Profile</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.5}}
                            >
                                <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                    This is the account settings section.
                                    The same component is reused in editing individual users.
                                </Typography>
                            </motion.div>
                            <StyledVideo id='profile' controls>
                                <source src={EditProfile} type="video/webm"/>
                            </StyledVideo>

                        </Box>
                    </Box>

                    <Box id={'userProgress'} my={'5rem'} sx={{
                        background: 'linear-gradient(450deg, #A5C4D4 -57%, rgba(221,221,221,0) 100%)'
                    }}>
                        <Typography align={'center'} variant={'h4'} sx={{paddingTop: '5rem',}}>User Progress
                            Logs</Typography>
                        <Box sx={{
                            display: {xs: 'block', lg: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: {xs: '2rem', lg: '5rem'},
                            paddingTop: '2rem',
                        }}>
                            <StyledVideo id='progress' controls>
                                <source src={UserProgress} type="video/webm"/>
                            </StyledVideo>
                            <Typography variant={'h6'} sx={{padding: {xs: '2rem', lg: '5rem'},}}>
                                Lastly, the progress log section on User dashboard.
                                Non-admin users can create/view their progress logs.
                                This is then viewed on Admin side via Users tab.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default FGF