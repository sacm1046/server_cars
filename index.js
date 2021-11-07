const express = require('express');
const http = require('http');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const { sequelize } = require('./database/database')

const app = express();
const { PORT } = process.env;

const carRoutes = require('./routes/car.route');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use('', carRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a mi api"
    })
})

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
    sequelize.sync({ force: false })
        .then(() => console.log("Conectados a la DB"))
        .catch((error)=>console.log("Se ha producido un error", error))
})
