window.onload = function() {
    var widgetHide = document.querySelector("#widget_hide"),
        widgetShow = document.querySelector("#widget_show"),
        nav = document.querySelector(".navbar");
    
    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;        
    }    
    function removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    removeClass(widgetHide, "nav__widget_hidden");
    widgetHide.addEventListener('click', function() {
        removeClass(nav, "nav_expanded");
        addClass(nav, "nav_collapsed");        
    })
    widgetShow.addEventListener('click', function() {
        removeClass(nav, "nav_collapsed");
        addClass(nav, "nav_expanded");
    });
};