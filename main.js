$(function () {
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
        scrollingSpeed: 0,
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
                    break;
                case 2:
                    $(".qual-list").removeClass("active");
                    break;
                case 3:
                    $(".exp-list").removeClass("active");
                    break;
                case 4:
                    $(".pro-list").removeClass("active");
                    break;
            }

        },
        afterLoad: function (anchorLink, index) {
            switch (index) {
                case 1:
                    $(".home-list").addClass("active");
                    var gsapAni = gsap.timeline({
                        defaults: { durations: 3, ease: Linear.easeNone }
                    });
                    gsapAni
                        .fromTo("h5", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                    gsapAni
                        .fromTo("h1", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                    gsapAni
                        .fromTo("p", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                    gsapAni
                        .fromTo("img, svg", 2, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1 }, "-=1.5");
                    gsapAni
                        .fromTo(".btn", 0.3, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1 }, "-=0.5");

                    break;
                case 2:
                    $(".qual-list").addClass("active");
                    var gsapAni = gsap.timeline({
                        defaults: { durations: 3, ease: Linear.easeNone }
                    });
                    gsapAni
                        .fromTo("h1.pt-3", 0.8, { autoAlpha: 0 }, { autoAlpha: 1 },);
                    gsapAni
                        .fromTo(".col .card", 0.5, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.3 }, "-=1.0");
                    gsapAni
                        .fromTo(".progress", 0.5, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.3 }, "-=2.5");
                    gsapAni
                        .fromTo(".edu", 0.8, { autoAlpha: 0 }, { autoAlpha: 1 },);
                    gsapAni
                        .fromTo("h5", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 })
                        .fromTo(".text-sm-end", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });

                    break;
                case 3:
                    $(".exp-list").addClass("active");
                    var gsapAni = gsap.timeline({
                        defaults: { durations: 3, ease: Linear.easeNone }
                    });
                    gsapAni
                        .fromTo("h1", 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                    gsapAni
                        .fromTo(".card-columns .card", 0.5, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.3 });
                    break;
                case 4:
                    $(".pro-list").addClass("active");
                    var gsapAni = gsap.timeline({
                        defaults: { durations: 3, ease: Linear.easeNone }
                    });
                    gsapAni
                        .fromTo("h1", 0.8, { autoAlpha: 0 }, { autoAlpha: 1 });
                    gsapAni
                        .fromTo(".col .card", 0.5, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.3 }, "-=1");
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

var options2 = {
    animation: true,
    delay: 4000,
    autohide: true
}

function thankYou() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const thank = urlParams.get('thank')
    if (thank == 'true') {
        var toastElement = $('#SuccessToast');
        var toast = new bootstrap.Toast(toastElement, options2);
        toast.show();
    }
}