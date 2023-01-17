

const express = require('express');
const { engine } = require("express-handlebars");
const path = require('path');
const morgan = require('morgan');
const { parse } = require('path');
const app = express();
const route = require('./routes')
const port = 3000; 
const direct = '/';

//mongoose
const db = require('./config/db');
db.mainConnect();

app.use(morgan('combined'));
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources','views'));


app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({
    extended: true 
})); 
app.use(express.json()) 

route(app); 


app.listen(port, () => {
    console.log(`localhost:${port}${direct}`)
})