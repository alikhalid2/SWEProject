const express = require('express');
const bodyParser = require('body-Parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('../public'));

app.get('/api', (req, res) => {
    res.send({
        username: 'ahmed',
        email: 'hmdeslam.adel@gmail.com'
    });
});


app.post('/api/login', (req, res) => {
    const checker = {
        username: 'ahmed',
        password: 'ahmed'
    };
    console.log(req.body);
    if (req.body.username == checker.username && req.body.password == checker.password)
        res.send(true);
    else
        res.send(false);
});



app.listen(7000, () => {
    console.log('server is running');
});