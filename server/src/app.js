console.log('1 2 3 4 5 6 7 8 9 10');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'))
app.use(express.json());
app.use(cors());


app.post('/register', (req, res) => {
    res.send({
        message: 'Hello ${req.body.email}! Your user was registered! Have fun!'
    });
});

app.listen(process.env.PORT || 8081);


