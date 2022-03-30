// handling mongoose
const mongoose = require('mongoose');

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
    password: String,
    currentUser: Boolean
});
//

// modeling users { making user object }
const user = mongoose.model('user', userschema);

// searching for all users in users collection
user.find()
.then((data) => console.log(data))
.catch((err) => console.log(err));
//

// exporting user model
module.exports = user;