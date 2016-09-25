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
});