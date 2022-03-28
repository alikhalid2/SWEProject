const express = require('express');
const app = express();
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

// USERS SCHEMA //
const userschema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,

    },
    password: String
});
//

// modeling users { making user object }
const user = mongoose.model('user', userschema);
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

user.find()
.then((data) => console.log(data))
.catch((err) => console.log(err));


  //**************************************************
  const Ajv=require("ajv");
  const ajv = new Ajv();
  const newUser={
      "type":"object",
      "properties":{
          "username":{
              "type":"string",
              "pattern":"^[A-Z][a-zA-Z0-9 ]*$"
          },
          "email":{
          "type":"string",
          "pattern":"^[a-zA-Z0-9\\._]+@[a-zA-Z0-9]+\\.[a-z]+(\\.[a-z]+)?$",
            },
          "password":{
            "type":"string",
            "pattern":"^[a-zA-Z0-9 ]+$",
              "minLength":7,
              "maxLength":14
          },
          //"required": ["username","email","password"]
      }

  }

  let validator=ajv.compile(schema = newUser);
  const users = [];

  
  //********************************************




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('../public'));

app.get('/api', (req, res) => {
    res.send({
        username: 'ahmed',
        email: 'hmdeslam.adel@gmail.com'
    });
});


app.post('/api/login', (req, res) => {
    console.log(req.body);
    user.find({username: req.body.username, password: req.body.password})
    .then((data) => {
        if (data.length !== 0)
        {
            res.send(true);
        }
        else
        {
            console.log(data);
            res.send(false);
        }
    })
    .catch((err) =>
    {
        console.log(err);
    });
});
  //********************************************

app.post("/api/register",(req,res)=>{
    console.log(req.body);
    let valid = validator(req.body);
    if (valid){
        //users.push(req.body);      //need to be stored in db
        user.init()
        .then(() => user.create(req.body).then(() => res.send(true)).catch((err) => {console.log(err);res.send(false)}));
    }
    else
        res.send(valid);

    console.log(valid);


});
  //********************************************



app.listen(7000, () => {
    console.log('server is running');
});