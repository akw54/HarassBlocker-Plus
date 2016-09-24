var express = require('express'),
    cors = require('cors'),
    app = express(),
    bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json 
app.use(bodyParser.json())

app.use(cors());

app.post('/check', function(req, res, next) {
    var rand = Math.random();
    var harass = false;
    if (rand < 0.7) {
        harass = true;
    }
    res.json({
        isHarassMessage: harass
    });
});

app.listen(8080, function() {
    console.log('CORS-enabled web server listening on port 80');
});