const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const connectDB = require('./config/db');
const app = express()
const PORT = process.env.PORT || 3002;
const fileUpload = require ('express-fileupload')

// Init Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileUpload({
    createParentPath:true
}));
app.use('/uploads', express.static('uploads'))

// Connect Database
connectDB()

app.get('/', require ('./routes/api/home'))
app.use('/category', require('./routes/api/category'))
app.use('/product', require('./routes/api/product'))
app.use('/user', require('./routes/api/user'))
app.use('/auth', require('./routes/api/auth'))
//app.use('/files', require ('./files'))

app.listen(PORT, () => { console.log(`backend na porta ${PORT}`) })