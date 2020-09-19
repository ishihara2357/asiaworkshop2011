$(function () {
    $(".menu-icon").on("click", function () {
        // fix the position of menu icon
        var rightVal = 0;
        if ($(this).hasClass("open")) {

            // open menu items from right side
            rightVal = -350;

            // switch menu icon
            $(this).toggleClass('fa-bars');

            // indicate the menu is alresdy opened
            $(this).removeClass("open");
        } else {

            // if class "open" was not given yet (closing state)
            $(this).addClass("open");

            // switch menu icon
            $(this).toggleClass('fa-bars');
        }

        // speed of slide animation 
        $(".header-right").stop().animate({
            right: rightVal
        }, 200);
    });
});