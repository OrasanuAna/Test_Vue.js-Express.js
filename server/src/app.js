console.log('1 2 3 4 5 6 7 8 9 10');

//încarcă modulul Express în proiect
const express = require('express');

//încarcă modulul CORS, care este un middleware ce permite/restricționează
//resursele partajate între diferite origini
const cors = require('cors');

//încarcă modulul Morgan, un middleware pentru logging care înregistrează
//detaliile cererilor HTTP care vin către server.
const morgan = require('morgan');

//initializeaza o instanta a aplicatiei Express
const app = express();

//Această linie spune aplicației Express să folosească middleware-ul Morgan
//pentru logging, cu formatul 'combined', care este un format predefinit de Morgan
//ce combină mai multe informații despre cerere.
app.use(morgan('combined'))

//foloseste un middleware pentru a analiza corpul cererilor JSON
app.use(express.json());

app.use(cors());

//Aceasta creează un route de tip GET la calea '/status'.
//Funcția cu parametrii `req` (cerere) și `res` (răspuns) va fi executată
//atunci când acest endpoint este accesat.
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    });
});

//Aceasta pornește serverul pe portul specificat. 
//În cazul în care variabila de mediu `PORT` nu este definită, 
//va folosi portul 8081 ca fallback.
app.listen(process.env.PORT || 8081);
