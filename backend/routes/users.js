// Creates new router object 
const router = require('express').Router();                      

let User = require('../models/user.model');

router.get( '/',  (req, res) => {
  User.find()                                                 // User.find() is a mongoose function which will return all the User data
    .then(users => res.json(users))                           // If the query runs successfully, the response will be given in json format
    .catch(err => res.status(400).json('Error: ' + err));     // If it is an error, then 400 error will come.
});

router.post( '/add' ,(req, res) => {
  const username = req.body.username;                         // Will get the username from the request body. 

  console.log(username)                                      

  const newUser = new User({username});                       //create a inserted username in the User model.  

  newUser.save()                                              // A MongoDB function will save the newly added user to the database  
    .then(() => res.json('User added!'))                      // If the query runs successfully, a 'User added!' json message
    .catch(err => res.status(400).json('Error: ' + err));     // If it is an error, 400 error will come. 
});


module.exports = router;
