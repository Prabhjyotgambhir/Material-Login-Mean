const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const config = require('./config/database');
const users = require('./routes/users');

// To accept requests from different port
app.use(cors());

// Database connection
mongoose.connect(config.database);

// Success database connection
mongoose.connection.on('connected', ()=> {
    console.log('Connected to database: ' +config.database);
});

// Error in database connection
mongoose.connection.on('error', (error)=> {
    console.log('Database error: ' +error);
})

// Body parser to parse the incoming body request
app.use(bodyParser.json());

// User oriented route requests
app.use('/users', users);

// Template file connection
app.use(express.static(path.join(__dirname, 'dist')));

// For any invalid requests
app.get('/', (req,res)=> {
    res.send('Invalid Endpoint');
})

// Start server
app.listen(port, () => {
    console.log('Server running at port: ',port);    
})

