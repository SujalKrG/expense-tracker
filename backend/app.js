const express = require('express');
const cors = require('cors');
const app = express();
const {db} = require('./db/db.js');
const {readdirSync} = require('fs');
const { route } = require('./routes/transactions.js');
require('dotenv').config();

const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("Listening to port:", PORT);
    })
}
server();