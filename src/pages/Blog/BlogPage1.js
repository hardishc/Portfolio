import React from 'react'
import { Box } from '@mui/system'
import { Typography, List, ListItem, ThemeProvider } from '@mui/material';
import { themeDark } from '../../styles/Style';
import { CodeBlock, codepen } from "react-code-blocks";
import BannerImage from './BlogPost1Assets/NodeExpress.jpg';
import CPUIO from './BlogPost1Assets/CPUIO.jpg';
import Install1 from './BlogPost1Assets/Install1.jpg'
import Install2 from './BlogPost1Assets/Install2.jpg'
import Install3 from './BlogPost1Assets/Install3.jpg'
import HomePage from './BlogPost1Assets/HomePage.jpg'
import ContactPage from './BlogPost1Assets/ContactPage.jpg'
import BlogNavBar from '../../components/BlogComponents/BlogNavBar';
import BlogFooter from '../../components/BlogComponents/BlogFooter';

function BlogPage1() {
  return (
    <ThemeProvider theme={themeDark}>
      <BlogNavBar></BlogNavBar>
      <Box sx={{ width: { xs: '80vw', lg: '60vw' }, margin: '0 auto', pt: '5rem' }}>
        <Typography align='center' variant="h3">
          Routing in NodeJS vs ExpressJS
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
          <Box component="img" sx={{ my: '2rem', maxWidth: '60%' }} src={BannerImage}></Box>
        </Box>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>Introduction</Typography>
        <Typography variant="body1" sx={{ my: '1.5rem' }}>As we all know, JavaScript is the one of the most popular language for web development in 2022. According to <a href="https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages-professional-developers">Stack Overflow’s 2020 Developer Survey</a>, JavaScript is the most commonly-used language in the world. With the help of JavaScript, coders can create dynamic elements. It started as a web browser component but now it is a core part of servers and various applications. JavaScript has a runtime environment called NodeJS which is a back-end environment. NodeJS is used for server-side scripting. NodeJS is a core component of many tech stacks used in the industry today.</Typography>
        <Typography variant="body1">Wait a minute, the heading says ExpressJS and we are talking about JavaScript, NodeJS?? What??? That’s because to understand what ExpressJS is, we need to know what NodeJS is and to understand NodeJS, we need to know what JavaScript is. With that confusion out of the way, we can now focus on ExpressJS. ExpressJS is a prebuilt NodeJS framework which simplifies the process of building the application. What sets Express apart is that Express is unopinionated which means that there is no “best” way to do one thing. In this blog, we will take a deeper dive into why NodeJS is great but ExpressJS is better. Before we do that, let us talk about Node and Express in detail to really highlight the differences.</Typography>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>What is NodeJS?</Typography>
        <Typography variant="body1">NodeJS is a JavaScript runtime built on Chrome’s V8 JavaScript engine. All the car guys probably know that V8 is a high-performance engine. This engine takes the JavaScript code and converts it into a faster machine code. Basically, with the help of NodeJS environment and V8 engine, JavaScript evolved from being a mere web browser language to a full-fledged web application development language. </Typography>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>Why use NodeJS?</Typography>
        <Typography variant="body1">A server is what receives all the requests made by the application. A thread is a worker inside the server that handles the request and sends a response. One thread can only work on one request at a time and the next request would need to wait for the first request to finish. Therefore, a single-threaded server can only handle one request at a time compared to multi-threaded server. This is important to know because JavaScript is a single-threaded language which means it cannot take advantage of multi-threaded server. This is where Event-Driven architecture comes handy which is one of the core fundamentals of NodeJS.</Typography>
        <Typography variant="body1" sx={{ my: '1.5rem' }}>Every web application works on the basis of Input/Output. This input/output can be anything. It can be making HTTP request to an API or reading/writing local files. I/O functions can be time consuming thus block other requests. To tackle this problem, NodeJS uses I/O architecture called Non-Blocking I/O.</Typography>
        <Typography variant="body1" sx={{ my: '1.5rem' }}>Imagine, your favorite bar fired all their servers except one because inflation does not discriminate. That one underpaid server could either deal with one or many tables at a time. Normally, the server would take first table’s order while the second table looks at the menu and the server would probably send first table’s order to the kitchen before taking second table’s order. Now suppose that the server sat down beside the first table party while they looked at the menu. The server waited for the party to decide, put in the order and waited until the food was cooked to serve the first table and only then move onto second table. This would be rather counter-productive, correct? This is what Blocking I/O architecture is. Thankfully, NodeJS does not use blocking I/O but rather does the work, the normal way that is serving multiple tables at a time.</Typography>
        <Typography variant="body1" sx={{ my: '1.5rem' }}> Same as the restaurant example, a server request has active and inactive parts. Active part is where CPU processing happens, and inactive part is I/O functions. So for a given request, if a thread is in inactive stage, it can accept the next request and perform the active functions until the first request’s inactive stage is finished.</Typography>
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
          <Box component="img" sx={{ my: '2rem', maxWidth: '100%' }} src={CPUIO}></Box>
        </Box>
        <Typography variant="body1" sx={{ my: '1.5rem' }}> This way, the second user request does not have to wait until the first one is finished and this results in fast performing application.</Typography>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>What is ExpressJS?</Typography>
        <Typography variant="body1">You might be wondering, if NodeJS is so good why do we need ExpressJS? Or if you are like me, you might be wondering what the heck is ExpressJS? Well, if you remember, we said in the beginning that ExpressJS is a NodeJS framework so that means ExpressJS does not do anything new, it just makes NodeJS stuff easy to code. Wait what? Did I really just use the words easy and code in one sentence? Yes, I did. Although I should mention, easy is subjective here. For example, “hello world” is what I would consider easy but anything more than that is super complicated. In addition to easy coding, it also improves flexibility and scalability.</Typography>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>Why use ExpressJS?</Typography>
        <Typography variant="body1">After tons of google searches and hours of watching YouTube videos, I learned that main reason to use Express is ease of coding. It basically cuts the coding time in half. Setting up server requests become quick. Database connections become easy as well. Express also has a huge community which is always a good thing. On top of cutting the coding time in half, the length of the code is also reduced which we will we discuss in the next section.</Typography>

        <Typography variant="h4" sx={{ my: '1.5rem' }}>NodeJS vs ExpressJS</Typography>
        <Typography variant="body1">In this section, we will go over simple routing using both NodeJS and ExpressJS. Hopefully we can understand the importance of ExpressJS. Every section has a video at the end in case you prefer that.</Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Install Node.js</Typography>
        <Typography variant="body1" >Let us first install the Node development environment.</Typography>
        <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <ListItem>1.	Visit Node.js official website https://nodejs.org/. The website will automatically detect OS and display download link </ListItem>
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="img" sx={{ my: '2rem', maxWidth: '80%' }} src={Install1}></Box>
          </Box>
          <ListItem>2.	From here, we can either download the LTS version or the current version. LTS version is more stable and that is what we will use for this tutorial whereas the current version has the latest features, but it might cause problems.
          </ListItem>
          <ListItem>3.	Keep pressing Next until the screen below shows up and Node.js is installed. </ListItem>
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="img" sx={{ my: '2rem', maxWidth: '80%' }} src={Install2}></Box>
          </Box>
          <ListItem>4.	To make sure the installation was successful, open a command-line and type the following command. If it shows a version like below, that means we are good to proceed. </ListItem>
          <CodeBlock
            text={`node -v`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="img" sx={{ my: '2rem', maxWidth: '80%' }} src={Install3}></Box>
          </Box>
          <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Node Installation</Typography>
          <iframe allowFullScreen width="100%" height="600px" src="https://www.youtube.com/embed/Hd6iUkmvPho" title="Node Installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </List>



        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Node Project Setup</Typography>
        <Typography variant="body1">We will now setup a node project. We will be using VSCode but you can use your preferred IDE.</Typography>
        <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <ListItem sx={{ mt: '1rem' }}>1.	Type the following command to initialize a node project in the current directory.</ListItem>
          <CodeBlock
            text={`npm init`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>2.	It will ask you to enter some details. For this project, we are going to enter description as Node program and author as Hardish, but I would highly suggest you use your own name for author.
          </ListItem>
          <ListItem sx={{ mt: '1rem' }}>3.	Next, we are going to install Express by typing the following command in the command line.</ListItem>
          <CodeBlock
            text={`npm install express`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>4.	For the final step, create an index.js file in the root directory of the project.</ListItem>
          <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Node Project Setup</Typography>
          <iframe width="100%" height="600px" src="https://www.youtube.com/embed/cdFLD88asXY" title="2  Node Setup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </List>



        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Node Server</Typography>
        <Typography variant="body1">Now we are going to dive into server creation with http request and response.</Typography>
        <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <ListItem sx={{ mt: '1rem' }}>1.	First, we will import the http module from NPM library and assign it to a variable named http.</ListItem>
          <CodeBlock
            text={"const http = require(‘http’);"}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>2.	Next, we will initialize a server instance with 2 arguments, one for request and one for response. Then assign an arrow function to the instance.</ListItem>
          <CodeBlock
            text={"http.createServer((req, res) => {})"}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>3.	We will write a simple hello world response inside the arrow function as shown.</ListItem>
          <CodeBlock
            text={`http.createServer((req, res) => {
            res.write(‘Hello World’)
            res.end();
})`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>4.	Now we will assign a listener port and console log a message to indicate that the server is currently running.</ListItem>
          <CodeBlock
            text={`.listen(3000, () => console.log(‘Server is listening on port 3000’));`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>5.	To run the server, we are going to type the following in the terminal.</ListItem>
          <CodeBlock
            text={`node index`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}> 6.	Next, we will open any web browser and type [localhost:3000]. AAND there it is, a sight to behold.</ListItem>
          <Typography variant="h6" align="center">Final Code</Typography>
          <CodeBlock
            text={`const http = require(‘http’);    

http.createServer((req, res) => {
          res.write(‘Hello World’)
          res.end();
})

.listen(3000, () => console.log(‘Server is listening on port 3000’));`}
            theme={codepen}
            language={'javascript'}
            wrapLines={true}
          />
          <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Node Server</Typography>
          <iframe width="100%" height="600px" src="https://www.youtube.com/embed/0Lyu6HzVXiM" title="3  Node Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </List>



        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Node Routing</Typography>
        <Typography variant="body1">Now that we understand how to setup a Node server, we can proceed to setup some static routes. We can start from a new file or continue off the previous one. For simplicity, we will only be setting simple routes to html files. We will not be creating REST APIs or be working with JSON data. Let us start from where we left off.</Typography>
        <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <ListItem sx={{ mt: '1rem' }}>1.	We are going to import 2 new modules from NPM library. Path module and FileSystem module and we will assign them to variables named path and fs respectively. </ListItem>
          <CodeBlock
            text={`const path = require(‘path’);
const fs = require(‘fs’);`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>2.	Next, we will assign a variable named server to the server instance and delete the contents inside it.
          </ListItem>
          <CodeBlock
            text={`const server = http.createServer();`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>3.	For port, we are going to use an environment variable. We will also make slight changes to the listener.</ListItem>
          <CodeBlock
            text={`const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(‘Server is listening on port 3000’));`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>4.	Now we are going to setup our first route. Inside the server instance, we are going to write an if statement that checks if the requested url matches the one in the statement. If it does, then we are going to send a 200 status and the content type as html page.</ListItem>
          <CodeBlock
            text={`If (req.url === ‘/’){
            res.writeHead(200, {‘Content-Type’:’text/html’});
            res.end(‘<h1>Home Page</h1>’);
}`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>5.	If we rerun the server by pressing Ctrl + C to close it and then typing the following to start it again, we should see Home Page as h1.</ListItem>
          <CodeBlock
            text={`node index`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="img" sx={{ my: '2rem', maxWidth: '80%' }} src={HomePage}></Box>
          </Box>
          <ListItem sx={{ mt: '1rem' }}>6.	Next, we are going to setup a contact page by doing an else if statement and comparing the request url to ‘/contact’. Rest of the steps are same as Home page.</ListItem>
          <CodeBlock
            text={`else if (req.url === ‘/contact’){
            res.writeHead(200, {‘Content-Type’:’text/html’});
            res.end(‘<h1>Contact Page</h1>’);
}`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>7.	If we rerun the server again, we can type the following to see the contact page as shown.</ListItem>
          <CodeBlock
            text={`localhost:3000/contact`}
            theme={codepen} language={'javascript'}
            wrapLines
          />
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="img" sx={{ my: '2rem', maxWidth: '80%' }} src={ContactPage}></Box>
          </Box>
          <ListItem sx={{ mt: '1rem' }}>8.	Next, we are quickly going to setup separate pages for home and contact. We will create a new page directory and create 2 files index.html and contact.html, and finally add boilerplate html to them.</ListItem>
          <ListItem sx={{ mt: '1rem' }}>9.	Back in our index.js, we are going to add a new line of code which will grab the html files we just created. As with all I/O functions, this function throws not found exception. The data variable is the actual html file to be loaded.</ListItem>
          <CodeBlock
            text={`fs.readFile(path.join(__dirname, ‘pages’, ‘index.html’), (err, data)`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>10.	For the final part, all we need to do is instead of res.end({'<h1>…'}), we will write res.end(data) as shown.</ListItem>
          <CodeBlock
            text={`fs.readFile(path.join(__dirname, ‘pages’, ‘index.html’), (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {‘Content-Type’:’text/html’});
            res.end(data);
}`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <Typography variant="h6" align="center">Final Code</Typography>
          <CodeBlock
            text={`const http = require('http');
const path = require('path');
const fs = require('fs');
          
const server = http.createServer((req, res) => {
       if (req.url === '/'){
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end('<h1>Home Page</h1>');
       } else if (req.url === '/about'){
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end('<h1>About Page</h1>');
       }
})
          
const PORT = process.env.PORT || 3000;
          
server.listen(PORT, () => console.log('Server is running on port ' + PORT));`}
            theme={codepen}
            language={'javascript'}
            wrapLines={true}
          />
          <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Node Routing</Typography>
          <iframe width="100%" height="600px" src="https://www.youtube.com/embed/FUIYY26UrkY" title="4  Node Routing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </List>





        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: '4rem', mb: '1rem' }}>Express Routing</Typography>
        <Typography variant="body1">As we learned, routing with Node is tedious. We need to route every single file and setup possibility of all status codes. With ExpressJS, static page routing is extremely easy.</Typography>
        <List sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <ListItem sx={{ mt: '1rem' }}>1.	First, we need to import the express module and assign it to a variable named app.</ListItem>
          <CodeBlock
            text={`const express = require(‘express’)
const app = express();
          `}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>2.	Next, we need to add this piece of code. All it does is that it creates static routes to all the files in pages folder via their file name.
          </ListItem>
          <CodeBlock
            text={`app.use(express.static(path.join(__dirname,’pages’)));`}
            theme={codepen}
            language={'javascript'}
            wrapLines
          />
          <ListItem sx={{ mt: '1rem' }}>3.	Now in the listener, instead of server.listen, we will write app.listen.</ListItem>
          <ListItem sx={{ mt: '1rem' }}>4.	If we run the server and type /contact.html, we can see it automatically routes to the page.</ListItem>
          <ListItem sx={{ mt: '1rem' }}>5.	In the video, I have added an extra about page so demonstrate the flexibility.</ListItem>
          <Typography variant="h6" align="center">Final Code</Typography>
          <CodeBlock
            text={`const express = require('express');
const path = require('path');
        
const app = express();
        
app.use(express.static(path.join(__dirname, 'pages')));

const PORT = process.env.PORT || 3000;
        
 app.listen(PORT, () => console.log('Server is listening on port ' + PORT));`}
            theme={codepen}
            language={'javascript'}
            wrapLines={true}
          />
           <Typography variant="h4" align="center" sx={{ mt: '3rem' }}>Video for Express Routing</Typography>
           <iframe width="100%" height="600px" src="https://www.youtube.com/embed/-c907ybiYiA" title="5  Express Routing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </List>



        <Typography variant="h4" sx={{ my: '1.5rem' }}>Conclusion</Typography>
        <Typography variant="body1" sx={{ my: '1.5rem' }}>The Node JS and Express JS difference does not stop both from being great choices for those who want to add full-stack capabilities to their website. NodeJS is the broader option and is suitable for most kinds of applications. On the other hand Express.JS is much faster and simple. At the end of the day, it is the coder's choice which one to use.</Typography>

      </Box>
      <BlogFooter />
    </ThemeProvider>
  )
}

export default BlogPage1