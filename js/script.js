$(document).ready(function () {

    $("#habbit #dota img").hover(function () {
        $("#habbit #dota img").fadeTo("medium", 0.7);
    }, function () {
        $("#habbit #dota img").fadeTo("medium", 1.0);
    });

    $("#habbit #badminton img").hover(function () {
        $("#habbit #badminton img").fadeTo("medium", 0.7);
    }, function () {
        $("#habbit #badminton img").fadeTo("medium", 1.0);
    });

    $("#habbit #brainstorm img").hover(function () {
        $("#habbit #brainstorm img").fadeTo("medium", 0.7);
    }, function () {
        $("#habbit #brainstorm img").fadeTo("medium", 1.0);
    });
    
    $("#portrait #text").hide();
    $("#portrait #img").addClass("col-sm-offset-3").click(function () {
        if ($(this).hasClass("slidable")) {
            $(this).slideUp(700, function () {
                $(this).removeClass("col-sm-offset-3");
                $("#portrait #img p").hide();
                $(this).slideDown(700);
                $("#portrait #text").slideDown(700);
                $("#portrait #img").removeClass("slidable");
            });
        }
    });
});