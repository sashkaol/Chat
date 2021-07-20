'use strict';
const mysql = require('mysql2');
const path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sashaoleneva1742',
  database: 'Chat'
}).promise();

const express = require('express');
const app = express();

let rooms;

app.use(express.static(path.join(__dirname, 'public')));

connection.query('SELECT * FROM Chat.Room;')
    .then(result => {
        rooms = JSON.stringify(result[0]);
        return rooms;
    })
    .catch(err => console.error(err))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
})
app.get('/rooms', (req, res) => {
    res.send(rooms)
})

// const data = {
//   login
// }

// connection.query('INSERT INTO Chat.User VALUES (NULL, )')
// app.post('/registrate', (req, res) => {
//   res.send('anddd');
// })

app.listen(8888);