/* Third Party Middleware
 */
// A list of Third party middleware for Express is available here. Following are some of the most commonly used middleware; we will also learn how to use/mount these −

/* body-parser */
// This is used to parse the body of requests which have payloads attached to them. To mount body parser, we need to install it using npm install --save body-parser and to mount it, include the following lines in your index.js −

var bodyParser = require("body-parser");

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());
// To view all available options for body-parser, visit its github page.

/* cookie-parser
 */
// It parses Cookie header and populate req.cookies with an object keyed by cookie names. To mount cookie parser, we need to install it using npm install --save cookie-parser and to mount it, include the following lines in your index.js −

var cookieParser = require("cookie-parser");
app.use(cookieParser());
/* express-session */
// It creates a session middleware with the given options. We will discuss its usage in the Sessions section.

// We have many other third party middleware in ExpressJS. However, we have discussed only a few important ones here.
