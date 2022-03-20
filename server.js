const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/App.jsx'));
});
app.post('/data', (req, res) => {
    res.send(req);
    
})
app.listen(port, () => {console.log('hello, I am here.');});

