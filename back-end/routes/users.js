// handling express
const express = require('express');


// handling multer module
const multer = require('multer');
const upload = multer()

// handling file upload
const fileUpload = require('express-fileupload');

// handling validator
const validator = require('../utils/validate.js');

// handling user database controller
const user = require('../controllers/UsersDbController.js');
const { application } = require('express');

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
router.post("/register",(req,res) => {
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

// getting the current user info
router.get('/user', async (req, res) => {
    const availableUser = await user.find({currentUser: 1})
    console.log(availableUser);
    res.send(availableUser[0]);
});

// edit the current user info 
router.put('/user', (req, res) => {
    user.findOneAndUpdate({currentUser: 1}, {currentUser: 0})
    .then(async () => {
        console.log(req.body.username);
        await user.findOneAndUpdate(req.body, {currentUser: 1})
    });
    
});
router.put('/user/logout', async (req, res) => {
    await user.findOneAndUpdate({currentUser: 1}, {currentUser: 0});
})


router.post('/test',fileUpload(), (req, res) => 
{
    //console.log(upload);
    console.log(req.files);
    console.log(req.body);
    for (let i in req.files)
    {
        let path = './test/' + req.files[i].name;
        req.files[i].mv(path);
    }

})
// export router
module.exports = router;