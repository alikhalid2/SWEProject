// handling express
const express = require('express');


// handling user database controller
const db = require('../controllers/UsersDbController.js');
// handling express router
const router = express.Router();

router.get('/games', async (req, res) => {
    const cursor = await db.game.find();
    const games = await cursor.toArray();
    res.send(games);
});


module.exports = router;