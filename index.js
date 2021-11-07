const express = require('express');
const http = require('http');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.get('/cars', (req, res) => {
    res.json({
        message: "Cars"
    })
})
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido"
    })
})

const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Servidor en puerto 3000")
})
