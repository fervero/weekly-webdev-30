$(function() {
    var $widgetHide = $("#widget_hide"),
        $widgetShow = $("#widget_show"),
        $nav = $(".navbar");
    $widgetHide.removeClass("nav__widget_hidden");
    $widgetHide.on('click', function() {
        $("nav").removeClass("nav_expanded").addClass("nav_collapsed");
    });
    $widgetShow.on('click', function() {
        $("nav").removeClass("nav_collapsed").addClass("nav_expanded");
    });

});
