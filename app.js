// set up
const express = require('express')
const app = express()
const port = 5000

// this registers the public folder so that we can access the static assets in the 
// client
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
        console.log('home route')
        // res.send('<h1>This is the Home Page 👋</h1>')
        res.sendFile(__dirname + "/views/index.html")
})
app.get('/views/about.html', (req, res) => {
        res.send('<h1>This is the About Page 🦦</h1>')
        res.sendFile(__dirname + "/views/about.html")
})
app.get('/views/neuromancer.html', (req, res) => {
   // res.send('<h1>Dive in, console cowboy!</h1>')
    res.sendFile(__dirname + "/views/neuromancer.html")
})
app.get('/views/photoGallery.html', (req, res) => {
    res.send('<h1>Picture time</h1>')
    res.sendFile(__dirname + "/views/photoGallery.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port} 🦄  `) 
})
const http = require('http');

// const server =  http.createServer(function (request, response) {
//     console.log('this is the requested url: ', request.url)
//     console.log('this is the requested method: ', request.method)
//     console.log('this is the reques handler')
//     // only for a specific request url we want to display the home page string
//     if (request.url === '/') {
//         response.end('<h1>this is the home page</h1>')
//     } else if (request.url === '/about') {
//         response.end('<h1>this is the about page</h1>')
//     } else {
//         response.end('<h1>404 - Not Found</>')
//     } 
// })