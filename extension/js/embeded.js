var content = $.find('._5yl5');
var send = function(message, $elem) {
  chrome.runtime.sendMessage({
    message: message,
    sender: "content"
  }, {}, function(isHarass) {
    console.log(isHarass);
    if (isHarass) {
      var randomInt = Math.round(Math.random() * 100000);
      var parent = $elem.parent();
      $(parent).prepend('<div class="spoiler" id="' + randomInt + '">Blocked Message</div>').css( "background-color", "#F44336" );
      $elem.css("color", "white");
      $("#" + randomInt).click(function() {
        $("#" + randomInt).hide();
        $elem.show();
      });
      $elem.hide();
      var original = $elem.hide();
    }
  });
};

var handle = function(message) {
  send($(message).text(), $(message));
  console.log($(message).text());
};

var len = content.length;
$('body').append('<div class="_5yl5"></div>');
$(document).ready(function() {
  // Faceboook.com
  $("._5yl5 > span").initialize(function(indx, message) {
    handle(message);
  });
  // Messenger.com
  $("._3oh-").initialize(function(indx, message) {
    handle(message);
  });
});
