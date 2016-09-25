var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
    username: '74046f25-1dca-4b0f-9211-efb47dc49825',
    password: 'fkiya1W5n0ce',
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
                    // console.log("WATSON API CALL");
                    callback(tone);
                }
            });
    }
}