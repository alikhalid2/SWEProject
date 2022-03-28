// handle Ajv module for making schema to validate new users
const Ajv = require("ajv");
const ajv = new Ajv();

// making new user schema
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

}; 

// compiling validator
let validator = ajv.compile(schema = newUser);

// export the validator
module.exports = validator;