alert("embeded");
var content = $.find('._5yl5');
var send = function (message) {
    chrome.runtime.sendMessage({message: message}, function(res) {
      console.log(res);
    });
};

var len = content.length;
// for (i = 0; i < len; i++) {
//     var message = content[i].innerText;
//     send(message);
// }
$('body').append('<div class="_5yl5"><span>test</span></div>');
$(document).ready(function () {
    $("._5yl5 > span").initialize(function (message) {
        //send(message);
        console.log(message);
    });
});