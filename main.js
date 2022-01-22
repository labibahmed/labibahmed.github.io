var gsapAni = gsap.timeline();
$(function () {
    /*$.get("parts/Nav.html", function (data) {
        $("body").prepend(data);
    });*/
    $.get("parts/Hero.html", function (data) {
        $("#Home").append(data);
    });
    $.get("parts/Skills.html", function (data) {
        $("#Skills").append(data);
    });
    $.get("parts/Edu.html", function (data) {
        $("#Edu").append(data);
    });
    $.get("parts/Experience.html", function (data) {
        $("#Experience").append(data);
    });
    $.get("parts/Projects.html", function (data) {
        $("#Projects").append(data);
    });
    $('#pagepiling').pagepiling({
        menu: '#menu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['Home', 'Qualifications', 'Experience', 'Projects'],
        scrollingSpeed: 600,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'Qualifications', 'Experience', 'Projects']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) {
            switch (index) {
                case 1:
                    $(".home-list").removeClass("active");
                    gsapAni
                        .to("#Home", { duration: 0, opacity: 0 });
                    break;
                case 2:
                    $(".qual-list").removeClass("active");
                    gsapAni
                        .to("#Qualifications", { duration: 0, opacity: 0 });
                    break;
                case 3:
                    $(".exp-list").removeClass("active");
                    gsapAni
                        .to("#Experience", { duration: 0, opacity: 0 });
                    break;
                case 4:
                    $(".pro-list").removeClass("active");
                    gsapAni
                        .to("#Projects", { duration: 0, opacity: 0 });
                    break;
            }

        },
        afterLoad: function (anchorLink, index) {
            switch (index) {
                case 1:
                    $(".home-list").addClass("active");
                    gsapAni
                        .fromTo("#Home", 2, { opacity: 0 }, { opacity: 100 });

                    break;
                case 2:
                    $(".qual-list").addClass("active");
                    gsapAni
                        .fromTo("#Qualifications", 2, { opacity: 0 }, { opacity: 100 });
                    break;
                case 3:
                    $(".exp-list").addClass("active");
                    gsapAni
                        .fromTo("#Experience", 2, { opacity: 0 }, { opacity: 100 });
                    break;
                case 4:
                    $(".pro-list").addClass("active");
                    gsapAni
                        .fromTo("#Projects", 2, { opacity: 0 }, { opacity: 100 });
                    break;
            }
        },
        afterRender: function () { },
    });
});

var options = {
    animation: true,
    delay: 2000,
    autohide: false
}
function toastShow() {
    var toastElement = $('#liveToast');
    var toast = new bootstrap.Toast(toastElement, options);
    toast.show();
}

function onClick() {
    $('.navbar-collapse a').on("click", function () {
        $(".navbar-collapse").collapse('hide');
    });
}