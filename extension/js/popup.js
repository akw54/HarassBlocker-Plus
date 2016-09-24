var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: '74046f25-1dca-4b0f-9211-efb47dc49825',
  password: 'fkiya1W5n0ce',
  version: 'v3',
  version_date: '2016-05-19 '
});

var test = function (content, len) {
    $("._5yl5").initialize( function(){
        console.log(content[len-1].innerText);
    });

    for (i = 0; i < len; i++) {
        var message = content[i].innerText;
        console.log(message);
        tone_analyzer.tone({ text: message }, function(err, tone) {
            $.post('http://harassblocker-yehyaawad.c9users.io:8080/check', function (res) {
                console.log(res);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var content = $.find('._5yl5');
    var len = content.length;
    test(content, len);

    for (i = 0; i < len; i++) {
        var message = content[i].innerText;
        console.log(message);
        tone_analyzer.tone({ text: message }, function(err, tone) {
            $.post('http://harassblocker-yehyaawad.c9users.io:8080/check', function (res) {
                console.log(res);
            });
        });
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