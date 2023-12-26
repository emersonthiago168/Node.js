const express = require('express');
const app = express();
const port = 5000;

const path = require('path');
const basePath = path.join(__dirname, 'templates')

const about = require('./about');

app.use(express.static('public'));

app.use('/about', about);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
})