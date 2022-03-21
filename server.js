
const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom');
// const component = require('./build/index.html');
const app = express();

app.get('/api', (request, responce) => {
    responce.send(JSON.parse(JSON.stringify({ahmed: 22, ali: 22, salah: 22})));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
});