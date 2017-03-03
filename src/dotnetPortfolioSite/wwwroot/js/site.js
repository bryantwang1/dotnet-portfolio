function VerticalFadeIn(str, target) {
    var chars = str.split("");

    $(target).append("<div class='row-flexer'></div>");

    chars.forEach(function (char, idx) {
        if (char === " ") {
            $(target).children(".row-flexer").append("<h2>&nbsp</h2>");
        } else {
            if (idx % 2 == 0) {
                $(target).children(".row-flexer").append("<h2 class='bw-fade-in-char bw-anim-y-positive-offset bw-opacity-0' id='animation-id-" + idx + "'>" + char + "<h2>");
            } else {
                $(target).children(".row-flexer").append("<h2 class='bw-fade-in-char bw-anim-y-negative-offset bw-opacity-0' id='animation-id-" + idx + "'>" + char + "<h2>");
            }
        }
    });

    var counter = 0;
    function removeClasses() {
        setTimeout(function () {
            if (counter < chars.length) {
                $("#animation-id-" + counter).removeClass("bw-opacity-0");
                $("#animation-id-" + counter).removeClass("bw-anim-y-positive-offset");
                $("#animation-id-" + counter).removeClass("bw-anim-y-negative-offset");
                removeClasses();
            }
            counter++;
        }, 220);
    }

    removeClasses();
}

function HorizontalSlideFadeIn(str, target) {
    var chars = str.split("");

    $(target).append("<div class='row-flexer'></div>");

    chars.forEach(function (char, idx) {
        if (char === " ") {
            $(target).children(".row-flexer").append("<h2>&nbsp</h2>");
        } else {
            $(target).children(".row-flexer").append("<h2 class='bw-fade-in-char bw-anim-x-positive-offset bw-opacity-0' id='animation2-id-" + idx + "'>" + char + "<h2>");
        }
    });

    var counter = 0;
    function removeClasses() {
        setTimeout(function () {
            if (counter < chars.length) {
                $("#animation2-id-" + counter).removeClass("bw-opacity-0");
                $("#animation2-id-" + counter).removeClass("bw-anim-x-positive-offset");
                removeClasses();
            }
            counter++;
        }, 220);
    }

    removeClasses();
}

$(function () {
    HorizontalSlideFadeIn("Welcome To", ".animation-area");
    
    $(window).bind("load", function () {
        setTimeout(function () {
            VerticalFadeIn("Bryant Wang's Portfolio Site", ".animation-area-2");
        }, 2500);
    });

    $(window).bind("load", function () {
        setTimeout(function () {
            var counter = 1;
            function removeClasses() {
                setTimeout(function () {
                    if (counter <= 3) {
                        $("#panel-" + counter).removeClass("bw-opacity-0");
                        removeClasses();
                    }
                    counter++;
                }, 300);
            }

            removeClasses();
        }, 500);
    });
});