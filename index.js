require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

const port = process.env.PORT;
const app = express();

dbConnection();     //DB

app.use(cors());    //CORS

app.use( express.json() ); //JSON Body parser

// --- ROUTES ---
app.use('/api/usuarios', require('./routes/usuarios-routes'));

app.listen( port, () =>{
    console.log("Server up in port:", port);
});