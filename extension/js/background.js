chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    $.post("http://harassblocker-yehyaawad.c9users.io:8080/check", {
            message: request.message
        },
        function(res) {
        	sendResponse(res);
        	console.log(res.isHarassMessage);
    	});
});