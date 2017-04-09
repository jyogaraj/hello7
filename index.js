var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 80));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
  response.render('pages/index', { title: 'Hey Hey Hey!', message: 'Yo Yo'} );
  response.send('Yoga');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


