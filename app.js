'use strict'

const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home')
})

// listen on the port to the application
app.listen(3000, () => {
  console.log('app now listening for request on port 3000')
})
