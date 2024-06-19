$(document).ready(function() {
    $(".selectable").click(function() {
        if ($(this).hasClass("highlighted")) {
            $(this).removeClass("highlighted");
        } else {
            $(this).addClass("highlighted");
        }
    });
$(".not-selectable").css('cursor', 'not-allowed');
});
