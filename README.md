# Query Typing

This project represents a use demo of a NodeJS Express middleware that converts HTTP query parameters from their initial **string** type to their respective primitve types.

### Usage

You can use this middleware function by importing the module and using it on the express app object. 

`const qt = require('./query-typing');`

`app.use(qt);`

From this point onwards, the Request.query object will have primitive-typed properties.

### Behind the scenes

The middleware achieves its goal by checking each property against possible values and identifying the possible primitive types.
It also performs a recursive call when coming across an array of parameters.

### Running the demo

You can run this demo by firstly running `npm install` in order to install all the required modules. Afterwards, firing up the server can be performed by running `npm start` command.
