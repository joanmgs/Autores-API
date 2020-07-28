const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.json())
const fs = require('fs');
const { json } = require('body-parser');

// console.log(autores)

server.get('/autores', (req, res) => {

    const autores = [];

    fs.readFileSync('./bd.json', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
        autores = JSON.parse(data)
    })

    res.json(autores)
})

server.post('/autores', (req, res) => {

    // const { id, nombre, apellido, DOB, libros } = req.body
    // autores.push(req.body)

    fs.appendFile('bd.json', console.log(req.body), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file! \n');
    })
    res.json("Autor Agregado!")
    res.status(200)
})

// server.get('')
server.listen(3000, () => {
    console.log('Server ready!');
})