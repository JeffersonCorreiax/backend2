//const createError = require("http-errors");
const express = require("express");
//const cors = require("cors");
//const methodOverride = require('method-override');
const path = require('path');

const routeProducts = require('./src/routes/routeProducts');
const routeSearch = require('./src/routes/routeSearch');

let app = express();

//app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//app.use(cors({
//    credentials:true,
//    origin: "*"
//}));

//routes
app.use('/', routeProducts);
app.use('/', routeSearch);

app.use(express.static(path.join(__dirname, '/public')));





// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');











app.listen(3333, () => {  // servidor para testes
    console.log("Servidor rodando na porta 3333")
})