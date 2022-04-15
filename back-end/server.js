
// handling database
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://AhmedElkfafy:ahmed123456789@cluster0.ejctf.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});










// handling express module
const express = require('express');
const app = express();

// handling userRoutes module { routes for api that about users }
const usersRoutes = require('./routes/users.js');


//* Mongoose contactor with mongo db data base
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', 
{
    autoIndex: false,

})
.then(() => console.log('connected successfully'))
.catch((err) => console.log(err));
//

// handling bodyParser module { helping with encoded html body }
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// handling static files
app.use(express.static('../public'));


// handling users routes as middlewares
app.use("/api", usersRoutes);

// make the server listening to port 7000
app.listen(7000, () => {
    console.log('server is running');
});