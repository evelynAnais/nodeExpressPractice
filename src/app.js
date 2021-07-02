const express = require('express');
const morgan = require('morgan');
const app = express();


const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}`;
  res.send(content);
}
// http://localhost:5000/say/Greeting?name=evelyn

const sayGoodbye = (req, res) => {
  res.send('sorry to se you go');
}

// app.get('/say/goodbye', (req, res) => {
//   res.send('sorry to se you go');
// });

app.get('/say/goodbye', sayGoodbye);
app.get('/say/:greeting', saySomething);


// const sayHello = (req, res, next) => {
//   res.send('Hello!');
// }

// const sayHello = (req, res) => {
//   console.log(req.query);
//   const name = req.query.na;
//   const content = name ? `Hello, ${name}!` : 'Hello!!!!!';
//   res.send(content);
// }
//  type http://localhost:5000/hello?na=Danni


// const sayHello = (req, res) => {
//   console.log(req.query);
//   const name = req.query.name;
//   const content = name ? `Hello, ${name}!` : "Hello!";
//   res.send(content);
// };
//  type http://localhost:5000/hello?name=Danni



//app.get('/hello', sayHello);
app.use(morgan('dev'));

// const logging = (req, res, next) => {
//   console.log('A request is being made!');
//   next();
// }

// app.use(logging);
// app.use(sayHello);

module.exports = app;


// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// // Application-level middleware
// app.use(morgan("dev"));

// // Route functions
// const sayHello = (req, res, next) => {
//   const name = req.query.name;
//   const content = name ? `Hello, ${name}!` : "Hello!";
//   res.send(content);
// };

// const sayGoodbye = (req, res, next) => {
//   res.send("Sorry to see you go!");
// };

// const saySomething = (req, res, next) => {
//   const greeting = req.params.greeting;
//   const name = req.query.name;

//   const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
//   res.send(content);
// };

// // Routes
// app.get("/hello", sayHello);
// app.get("/say/goodbye", sayGoodbye);
// app.get("/say/:greeting", saySomething);

// module.exports = app;