// Imports the module
const mongoose = require("mongoose")

// Creates a Mongo Database
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/simple_todo";

// Opens up a connection to the MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true})
.then(() => {
    console.log("Connected to Database at: " + connectionString)
})

module.exports = mongoose