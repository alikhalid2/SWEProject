// handling express module
const express = require('express');
const app = express();

// handling userRoutes module { routes for api that about users }
const usersRoutes = require('./routes/users.js');

//handling gamesRoutes module {routes for api that about games }
const gameRoutes = require('./routes/games.js');

//* Mongoose contactor with mongo db data base
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/users', 
// {
//     autoIndex: false,

// })
// .then(() => console.log('connected successfully'))
// .catch((err) => console.log(err));




//

// handling bodyParser module { helping with encoded html body }
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// handling static files
app.use(express.static('../public'));


// handling users routes as middlewares
app.use("/api", usersRoutes);

// handling games routes as middlewares
app.use('/api', gameRoutes);
// make the server listening to port 7000
app.listen(7000, () => {
    console.log('server is running');
});