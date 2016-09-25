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


var harassClassifier = require("./classifier/harassClassifier.js");

app.post('/check', function(req, res, next) {
    var message = req.body.message;
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    harassClassifier.isHarassMessage(message, function(isHarass) {
        if (isHarass) {
            console.log("HARASSMENT ALERT: " + message);
            res.json({
                isHarassMessage: true
            });
        }
        else {
            console.log("NO ALERT: " + message);
            res.json({
                isHarassMessage: false
            });
        }
    });

});

app.listen(8080, function() {
    console.log('CORS-enabled web server listening on port 80');
});