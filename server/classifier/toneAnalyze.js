var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
    username: '65ce1b08-085e-469a-834b-9674f0a13704',
    password: 'wvzOHUd0JYos',
    version: 'v3',
    version_date: '2016-05-19 '
});

module.exports = {
    getTone: function(text, callback) {
        tone_analyzer.tone({
                text: text
            },
            function(err, tone) {
                if (err)
                    console.log(err);
                else {
                    callback(tone);
                }
            });
    }
}