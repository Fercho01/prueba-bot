require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web.routes');

const app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// ===__********** Habilitar el ejs  **********__===
app.set( 'view engine', 'ejs' );
app.set( 'views', './views' );// Todas las carpetas se cargan

// ===__********** Carpeta pública  **********__===
app.use( express.static('public') );

// ===__********** Rutas  **********__===
app.use( '/', webRoutes );

let port = process.env.PORT || 8080;

app.listen( port, () => {
    console.log( 'Servidor iniciando en puerto: ' + port );
});