var content = $.find('._5yl5');
var send = function (message, $elem) {
    chrome.runtime.sendMessage({message: message}, {}, function(isHarass) {
    	console.log(isHarass);
    	if (isHarass) {
    		$elem.text("I am a terrible human being.");
    	}
    });
};

var handle = function (message) {
	send($(message).text(), $(message));
    console.log($(message).text());
};

var len = content.length;
$('body').append('<div class="_5yl5"><span>test</span></div>');
$(document).ready(function () {
    // Faceboook.com
    $("._5yl5 > span").initialize(function (indx, message) {
        handle(message);
    });
    // Messenger.com
    $("._3oh-").initialize(function (indx, message) {
        handle(message);
    });
});
