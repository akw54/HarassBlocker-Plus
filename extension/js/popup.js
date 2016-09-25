
// var toggle = function() {
//     chrome.tabs.query({}, function(tabs) {
//         for (var i=0; i<tabs.length; ++i) {
//             chrome.tabs.sendMessage(tabs[i].id, {from: 'popup', title: "toggle"});
//         }
//     });
// };

document.addEventListener('DOMContentLoaded', function() {
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
    // update counter
    setInterval(function () {
        chrome.runtime.sendMessage({sender: "popup"}, {}, function(count) {
            $("#counter").text(count);
            console.log(count);
        });
    }, 100);
});