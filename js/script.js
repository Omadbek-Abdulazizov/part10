$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        autoPlay: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});