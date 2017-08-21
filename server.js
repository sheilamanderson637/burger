// Dependencies
// ==========================================================
var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

var app = express();

// Use static content from public folder
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride('_method'));

// Use Handlebars for the view
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes 
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);

