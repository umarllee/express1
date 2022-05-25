console.clear();


const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3200;

let users = [];

app.get('/', (req, res) => {
    res.send('<h1>SALAM</h1>')
});

app.post('/users', (req, res) => {
    users = [...users, req.body];
    console.log(req.body);
    res.send(users);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`)
});