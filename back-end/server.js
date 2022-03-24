const express = require('express');
const app = express();
const bodyParser = require('body-Parser');


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
    const checker = {
        username: 'ahmed',
        password: 'ahmed'
    };
  
    console.log(req.body);
    if (req.body.username == checker.username && req.body.password == checker.password)
        res.send(true);
    else
        res.send(false);
});
  //********************************************

app.post("/api/register",(req,res)=>{
    console.log(req.body);
    let valid = validator(req.body);
    if (valid){
        users.push(req.body);      //need to be stored in db
    }
    console.log(valid);
    res.send(valid);


});
  //********************************************



app.listen(7000, () => {
    console.log('server is running');
});