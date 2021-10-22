//------------------------------- imports
const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes')
const path = require('path');

const app = express();
const PORT = 8088;

//------------------------------- Middlewares
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/dataForm', express.static(path.join(__dirname, 'views')));

//------------------------------- HTTP services

app.get('/', (req, res) => {
    console.log(`en la raiz del servidor`);
    res.send (true);
})

serverRoutes(app);

//------------------------------- Listen
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
})
