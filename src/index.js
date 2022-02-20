const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const bodyParser = require('body-parser');  

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use('/', require('./routers/routers'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});