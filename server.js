const express = require("express")
const app = express()
const methodOverride = require("method-override")
const { taskRouter } = require("./controllers/simple_todo.js")

// Middleware registration
// Parses through the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))

// Parses through the body of the HTTP requests from a JSON string  
app.use(express.json())

//add method-override middleware for "faking" DELETE and PUT/PATCH requests 
app.use(methodOverride('_method'))

//Creates routers for the application, first arguement is the path
app.use("/api/", taskRouter)

//Uses the client/build directory to host CSS and images
if (process.env.NODE_ENV === "production") {
    app.use(express.static(`${__dirname}/client/build`))
}

//adds a route to serve up the built react app for any request not made to my API
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

//Sets the port for the server
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})