var content = $.find('._5yl5');
var send = function (message) {
    chrome.runtime.sendMessage({message: message}, function(res, res2) {
      console.log(res2);
    });
};

var len = content.length;
$('body').append('<div class="_5yl5"><span>test</span></div>');
$(document).ready(function () {
    $("._5yl5 > span").initialize(function (indx, message) {
        send($(message).text());
        console.log($(message).text());
    });
});
