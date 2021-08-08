const express = require("express")
const app = express()
const methodOverride = require("method-override")

// Middleware registration
// Parses through the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))

 // Parses through the body of the HTTP requests from a JSON string  
 app.use(express.json())

  //add method-override middleware for "faking" DELETE and PUT/PATCH requests 
  app.use(methodOverride('_method'))

  //Uses the client/build directory to host CSS and images
  app.use(express.static(`${__dirname}/client/build`))

  //Sets the port for the server
  const PORT = process.env.PORT || 8080

  app.listen(PORT, () => {
      console.log(`App listening on port: ${PORT}`)
  })