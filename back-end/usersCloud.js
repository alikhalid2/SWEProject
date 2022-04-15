

const  { MongoClient } = require ('mongodb');


const uri = "mongodb+srv://users:users@cluster0.zfzhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);


module.exports.client = client;

//    try {

//     await client.connect();

 
   
//    await  createNewUser(client, {
//        userName : "Ali Khalid",
//        email : "alikhalid.sewelm@gmail.com",
//        password : "123456789" 

//    }) 
//     // await logIn(client,'aaa');

//    } catch (e) {
//        console.error(e);
//    } finally{
//        await client.close();
//    }





async function logIn(client, name){
    const result = await client.db("flareGun").collection("users").findOne({ userName : name });
    console.log(result);
    if (result){ // go to the main page
        console.log(`Found you , '${name}'`);
        return true;
    }else { //اضربه 
        console.log (`No one with the name '${name}'`);
        return false;
    }

} 


async function createNewUser(client, newUser){
    // to check if he her or not
    const logInValue = await logIn(client,newUser.userName) ;
    if (logInValue){
        console.log ("Found before");
    }else {
    const result = await client.db("flareGun").collection('users').insertOne(newUser);
    console.log(`New User Is Added With id: ${result.insertedId}`); 
    }
}

