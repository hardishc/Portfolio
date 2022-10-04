import React from 'react'
import { Box } from '@mui/system'
import { Typography, List, ListItem, ThemeProvider } from '@mui/material';
import { themeDark } from '../../styles/Style';
import { CodeBlock, codepen } from "react-code-blocks";
import Express from './BlogPost2Assets/Express.jpg';
import NoMiddleware from './BlogPost2Assets/NoMiddleware.jpg'
import Middleware from './BlogPost2Assets/Middleware.jpg'
import Chain from './BlogPost2Assets/Chain.jpg'
import ContactPage from './BlogPost1Assets/ContactPage.jpg'
import BlogNavBar from '../../components/BlogComponents/BlogNavBar';
import BlogFooter from '../../components/BlogComponents/BlogFooter';

function BlogPage1() {
    return (
        <ThemeProvider theme={themeDark}>
            <BlogNavBar></BlogNavBar>
            <Box sx={{ width: { xs: '80vw', lg: '60vw' }, margin: '0 auto', pt: '5rem' }}>
                <Typography align='center' variant="h3">
                    ExpressJS Middleware
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Box component="img" sx={{ my: '2rem', maxWidth: '60%' }} src={Express}></Box>
                </Box>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>Introduction</Typography>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>Last time, we discussed the benefits of using Express JS over Node JS. Today, I am going to focus on the topic of middleware. This blog will not be a direct comparison between Node and Express as last blog was. That is because Node JS does not have an easy way to write to middleware. Express has prebuilt functions to write middleware. While it is possible to write using Node, it however is tedious. Before we take a deep dive into middleware, let us define what a middleware actually is. In regard to MERN stack, Middleware is software containing functions that execute during the request-response cycle and have access to both the request object (req) and the response object (res). But in general terms, middleware is a piece of software that lies in between 2 independent entities. It essentially functions as a hidden translation layer. For Web apps, middleware can be used for validations or verifications. One big advantage is that one piece of middleware can be used to handle many different requests. It helps save time as we do not have to write validation to handle each request. Express JS has a lot of prebuilt middleware, but we can write our own middleware as well. In this blog, we will take a look at pre-existing middleware as well as write our own.</Typography>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>How does a middleware work and why do we need it?</Typography>
                <Typography variant="body1">Like we mentioned earlier, middleware works as translation layer. Middleware has access to both Request objects and Response objects in a MERN application. With Express, it is possible to chain multiple middleware together. This allows us to write reusable code. Below is an example of how middleware can be beneficial.</Typography>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>Let’s say we have an application that supports user login. We have some specific requests that require a user to be logged in and are not valid without a user. Without the help of middleware, this is how we would probably handle this scenario.</Typography>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Box component="img" sx={{ my: '2rem', maxWidth: '100%' }} src={NoMiddleware}></Box>
                </Box>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>As we can see, for requests that do not require user login, it is not a problem as that can be handled with ease. But for the requests that do require user login, we have to write the code to verify user login in every request. This can become quite cumbersome and honestly, I got bored midway creating the image shown above.</Typography>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>Now let us see how we can use middleware to simplify it.</Typography>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Box component="img" sx={{ my: '2rem', maxWidth: '100%' }} src={Middleware}></Box>
                </Box>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>As we can see, the requests that do not require user login are handled the same way as before but the requests that do require user login do not have their own code verifying the authentication. They all pass through 1 middleware which verifies the user authentication and handles the request appropriately. This helps us reduce the code for sure but also helps us streamline error handling. In case, we need to make changes to the user verification code, we do not have to make changes to each request. All we need to do is make changes to the middleware and every request will confer to the newly made changes.</Typography>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>Middleware chaining</Typography>
                <Typography variant="body1">Express JS has this neat feature where we can chain multiple middleware and handle the request accordingly. Chaining is a simple concept. A route controller can have multiple middleware chained together. Next middleware is called used the next() function. We will take a look at the code later but for now let us try to visualize chaining with an example.</Typography>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>We will use the same example as the previous image. Let us suppose after verifying user login, we need to verify if the user is an admin or a regular user. We can achieve that by chaining middleware as shown below.</Typography>        <Typography variant="body1" sx={{ my: '1.5rem' }}>Imagine, your favorite bar fired all their servers except one because inflation does not discriminate. That one underpaid server could either deal with one or many tables at a time. Normally, the server would take first table’s order while the second table looks at the menu and the server would probably send first table’s order to the kitchen before taking second table’s order. Now suppose that the server sat down beside the first table party while they looked at the menu. The server waited for the party to decide, put in the order and waited until the food was cooked to serve the first table and only then move onto second table. This would be rather counter-productive, correct? This is what Blocking I/O architecture is. Thankfully, NodeJS does not use blocking I/O but rather does the work, the normal way that is serving multiple tables at a time.</Typography>
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <Box component="img" sx={{ my: '2rem', maxWidth: '100%' }} src={Chain}></Box>
                </Box>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>As we can notice, by chaining the middleware, we can perform multiple checks and verify data at different points in the application. We can also setup the application so some of the routes have Verify User Login Middleware while others have both Verify User Login Middleware and Verify Admin Privilege Middleware. This modularity helps design a more consistent application. We can stop the chaining process at any time. The control only moves forward when next() function call is made. If the verification fails, we can throw an error which will stop the middleware chain at that specific point.</Typography>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>Prebuilt Middleware</Typography>
                <Typography variant="body1">Express JS has some prebuilt middleware. An Express application is essentially a series of middleware function calls. In fact, we used one of the Express’ prebuilt middleware in blog 1’s code. Some of the Express middleware are:</Typography>
                <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
                    <ListItem>1. express.json : This middleware is used to parse incoming requests with JSON payloads and is based on body-parser.</ListItem>          
                    <ListItem>2. express.urlencoded : This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.</ListItem>
                    <ListItem>3. express.static : This middle servers static files. This is the middleware we used in Blog 1 to show the static html files.</ListItem>
                </List>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>Setting up Routes</Typography>
                <Typography variant="body1">Express also allows us to write our own middleware. But before we can start writing our Middleware, we need to setup some routes. We are going to use the same code as Blog 1. You can download the files from here. We are going to change this code a little bit. Instead of calling static html files, we are going to set them up as server requests.</Typography>
                <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
                    <ListItem sx={{ mt: '1rem' }}>1. Firstly, comment out the app.use code</ListItem>
                    <ListItem sx={{ mt: '1rem' }}>2. We are going to setup a GET request for index.html page. Write the following code:</ListItem>
                    <CodeBlock
                        text={`app.get(‘/’, (req, res) => {})`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>This code specifies that we want to setup GET request at ‘/’ url with request and response objects.</ListItem>
                    <ListItem sx={{ mt: '1rem' }}>3. Inside the callback function, we are going to specify the html file we want to hit with that code. To do that we need to use the response (res) object and pass file to that like so.</ListItem>
                    <CodeBlock
                        text={'res.sendFile(path.join(__dirname, ‘pages’, ‘index.html’))'}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>4. We are going to do the same for the contact and about page and the final code should look something like this.</ListItem>
                    <CodeBlock
                        text={`app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'))
});

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'))
});
                        `}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Setting up Routes</Typography>
                    <iframe allowFullScreen width="100%" height="600px" src="https://www.youtube.com/embed/OTLXskw7Xzc" title="Setting up Routes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </List>



                <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Writing Middleware</Typography>
                <Typography variant="body1">Now that we have our routes setup, we will write a logger middleware that logs all the requests to a file.</Typography>
                <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
                    <ListItem sx={{ mt: '1rem' }}>1. Create a new folder, name it middleware, and create a new logMiddleware.js file inside it</ListItem>
                    <ListItem sx={{ mt: '1rem' }}>2. In this middleware, we need to import filesystem (fs)
                    </ListItem>
                    <CodeBlock
                        text={`const fs = require("fs");`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>3. We are going to declare our middleware function. One thing to notice here is that middleware have request, response and next. The next function is used to call the next middleware in the chain of middleware. Write the following code to declare the function.</ListItem>                    
                    <CodeBlock
                        text={`const logger = (req, res, next) => {}`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>4. Now we are going to get the current date and time and format it nicely. For that, we need to declare a new date variable like so.</ListItem>
                    <CodeBlock
                        text={`const date = new Date();`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>And we are also going to declare another variable for the formatting. I am going to get the year, month, date, hours, minutes and seconds.</ListItem>
                    <CodeBlock
                     text={`const formattedDate = date.getFullYear() +
"-" +
(date.getMonth() + 1) +
"-" +
date.getDate() +
" " +
date.getHours() +
":" +
date.getMinutes() +
":" +
date.getSeconds();`}
                     theme={codepen} language={'javascript'}
                     wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>5. Now that we have timestamps, we are going to add variables for Request method, Request URL and Response Status Code.</ListItem>
                    <CodeBlock
                        text={`const method = req.method;
const url = req.url;
const status = res.statusCode;`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>6. Next, we are going to create another variable which stores our timestamps and the other stuff in a readable format.</ListItem>
                    <CodeBlock
                        text={'const log = `[${formattedDate}] ${method}:${url} ${status}`;'}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>7. For the next step, we need to append this log to a file using fs.appendFile. The fs.appendFile method asynchronously appends data to a file, creating the file if it does not yet exist. So all our logs will be stored in this file. We will also check for any errors and console log them.</ListItem>
                    <CodeBlock
                        text={`fs.appendFile("requestLogs.txt", log + "\\n", err => {
    if (err) {
        console.log(err);
    }
});`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>8. Finally, we need to call the next function and also add the export definition.</ListItem>
                    <CodeBlock
                        text={`next();
module.exports = logger;`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <Typography variant="h6" align="center" sx={{ mt: '3rem' }}>Our final middleware code should look like this</Typography>
                    <CodeBlock
                        text={`
const logger = (req, res, next) => {
    const date = new Date();
    const formattedDate = date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
                        
    const method = req.method;
    const url = req.url;
    const status = res.statusCode;
                        
    const log = ["$"{formattedDate}] "$"{method}:"$"{url} "$"{status};
                        
    fs.appendFile("requestLogs.txt", log + "\\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
}
                        
module.exports = logger;`}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>9. For the next step, we need to add this newly created middleware to our index.js file. To do that, all we need to do is import this middleware into the index.js file and use app.use to call this middleware. Add this middleware before our routes.</ListItem>
                    <CodeBlock
                        text={`const logger = require('./middleware/logMiddleware')

app.use(logger);                        `}
                        theme={codepen} language={'javascript'}
                        wrapLines
                    />
                    <ListItem sx={{ mt: '1rem' }}>One thing to keep in mind is that Node code works in a waterfall manner. For example, if we add our logger middleware between about and contact page, we will only get logs for contact page and not for about page.</ListItem>
                    <ListItem sx={{ mt: '1rem' }}>10. Now we can start our server and go to one of the routes. Once we do that, we will see a new file in the server called requestLogs.txt which will show all the requests with their response code, the url address and timestamps.</ListItem>
                    <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Logger Middleware</Typography>
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/CF5kbMFDAC0" title="Writing Logger Middleware" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </List>

                <Typography variant="h4" sx={{ my: '1.5rem' }}>Conclusion</Typography>
                <Typography variant="body1" sx={{ my: '1.5rem' }}>Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle. Middleware gets executed after the server receives the request and before the controller actions send the response. Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls. With middleware, developers can plug in scripts to intercept the flow of the application, for example, developers can use middleware to check if a user is successfully logged in or logged out. Express.js’s shallow learning curve makes it very simple and easy to get started with. It abstracts away unnecessary or unwanted web application features and provides you with a thin layer of core features that allow for flexibility.</Typography>

            </Box>
            <BlogFooter />
        </ThemeProvider>
    )
}

export default BlogPage1