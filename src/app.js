const express = require('express');
const morgan = require('morgan');
const app = express();

const sayHello = (req, res, next) => {
  res.send('Hello!');
}

app.use(morgan('dev'));

// const logging = (req, res, next) => {
//   console.log('A request is being made!');
//   next();
// }

// app.use(logging);
app.use(sayHello);

module.exports = app;