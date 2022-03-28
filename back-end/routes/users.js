// handling express
const express = require('express');

// handling validator
const validator = require('../middlewares/validate.js');

// handling user database controller
const user = require('../controllers/UsersDbController.js');

// handling express router
const router = express.Router();

// handling login request
router.post('/login', (req, res) => {
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

// handling register request
router.post("/register",(req,res)=>{
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

// export router
module.exports = router;