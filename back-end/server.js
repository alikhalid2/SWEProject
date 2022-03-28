const express = require('express');
const app = express();
const usersRoutes = require('./routes/users.js');
const bodyParser = require('body-Parser');


//* Mongoose contactor with mongo db data base
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', 
{
    autoIndex: false,

})
.then(() => console.log('connected successfully'))
.catch((err) => console.log(err));
//


//

/*
const goodUser = {
    username: 'all',
    email: 'all.adel@gmail.com',
    password: 'tryAgain'
};

user.init()
.then(() => user.create(goodUser, (err) => console.log(err)))
.catch((err) => console.log(err));
*/
//goodUser.save().catch((err) => console.log('errrr finally'));



  //**************************************************
  
  const users = [];

  
  //********************************************




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('../public'));


// handling users routes as middlewares
app.use("/api", usersRoutes);
app.get('/api', (req, res) => {
    res.send({
        username: 'ahmed',
        email: 'hmdeslam.adel@gmail.com'
    });
});



  //********************************************



app.listen(7000, () => {
    console.log('server is running');
});