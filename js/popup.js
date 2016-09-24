var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: '74046f25-1dca-4b0f-9211-efb47dc49825',
  password: 'fkiya1W5n0ce',
  version: 'v3',
  version_date: '2016-05-19 '
});

//var text = "Hello! My name is Adam Wolf.";
document.addEventListener('DOMContentLoaded', function() {
    for (i = 0; i < $.find('p').length; i++) {
        var innerSentences = document.all[0].innerText;
        for (j = 0; j < innerSentences.length; j++) {
            console.log(innerSentences[i]);
            tone_analyzer.tone({ text: innerSentences[i] },
              function(err, tone) {
                console.log(JSON.stringify(tone, null, 2));
            });
        }
    }
    
    $('#power').on('click', function () {
        if ($('#power').hasClass('glyphicon-eye-close')) {
            $('#power').removeClass('glyphicon-eye-close');
            $('#power').addClass('glyphicon-eye-open');
            $('#power').removeClass('text-danger');
            $('#power').addClass('text-muted');
        } else {
            $('#power').removeClass('glyphicon-eye-open');
            $('#power').addClass('glyphicon-eye-close');
            $('#power').removeClass('text-muted');
            $('#power').addClass('text-danger');
        }
    });
});