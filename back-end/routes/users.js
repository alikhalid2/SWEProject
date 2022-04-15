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
const db = require('../controllers/UsersDbController.js');


// handling express router
const router = express.Router();

router.get('/', () => console.log(db.user));

// handling login request
router.post('/login', (req, res) => {
    console.log(req.body);
    db.user.findOne({username: req.body.username, password: req.body.password})
    .then((data) => {
        if (data)
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
        // user.init()
        // .then(() => user.create(req.body).then(() => res.send(true)).catch((err) => {console.log(err);res.send(false)}));
        db.user.insertOne(req.body);

    }
    res.send(valid);

    console.log(valid);


});

// getting the current user info
router.get('/user', async (req, res) => {
    const availableUser = await db.user.findOne({currentUser: 1})
    console.log(availableUser);
    res.send(availableUser);
});

// edit the current user info 
router.put('/user', async (req, res) => {
    console.log(req.body.username);
    await db.user.findOneAndUpdate(req.body, {$set: {currentUser: 1}})
    
});
router.put('/user/logout', async (req, res) => {
    await db.user.findOneAndUpdate({currentUser: 1}, {$set: {currentUser: 0}});
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