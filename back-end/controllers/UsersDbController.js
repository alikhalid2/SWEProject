// // handling mongoose
// const mongoose = require('mongoose');

// // USERS SCHEMA //
// const userschema = new mongoose.Schema({
//     username: {
//         type: String,
//         unique: true
//     },
//     email: {
//         type: String,
//         unique: true,

//     },
//     password: String,
//     currentUser: Boolean
// });
// //

// // modeling users { making user object }
// const user = mongoose.model('user', userschema);

async function main() {
    // const  { MongoClient } = require ('mongodb');
    
    
    // const uri = "mongodb+srv://AhmedElkfafy:ahmed123456789@cluster0.zfzhv.mongodb.net/Clusters?retryWrites=true&w=majority";
    
    // const client = new MongoClient(uri);
    
    
    // await client.connect();
    // // const user = client.db("flareGun").collection("users");

    // // searching for all users in users collection
    // client.db("flareGun").collection("users").find()
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));
    // //

    

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://users:users@cluster0.zfzhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect();



const find = await client.db('flareGun').collection('users').findOne({userName: "Ali Khalid"});
console.log(find);
const user = await client.db('flareGun').collection('user');
module.exports.user = user;
}
main();
