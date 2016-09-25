var count = 0;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.sender === "popup") {
			console.log("Message from popup");
			sendResponse(count);
		} else if (request.sender === "content") {
		    $.post("http://harassblocker-yehyaawad.c9users.io:8080/check", {
		            message: request.message
		        },
		        function(res) {
		        	sendResponse(res.isHarassMessage);
		        	console.log(res.isHarassMessage);
		        	if (res.isHarassMessage) {
		        		count++;
		        	}
		    	});
		}
		return true;
	});