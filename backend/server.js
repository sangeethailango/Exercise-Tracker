// We need express in our project. We write express as required
// We need cors in our project. We write cors as required
const express = require('express');    
const cors = require('cors');          
const mongoose = require('mongoose')

// We need dotenv in our project to write the environmental variable in a .env file.
require('dotenv').config();            


const app = express();                 // Will create a express application 
const port = process.env.PORT || 5000;  

// Will set up the middleware
app.use(cors());
app.use(express.json());

// connect our database to mongodb atlas
// ATLAS_URI is a uri from the mongodb atlas 
const uri = process.env.ATLAS_URI;               

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Will start the server. 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
