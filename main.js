$(function () {
    $.get("parts/Nav.html", function (data) {
        $("body").prepend(data);
    });
    $.get("parts/Hero.html", function (data) {
        $("#Hero").append(data);
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
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['Hero', 'Skills-Edu', 'Experience', 'Projects'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'Qualifications', 'Expereince', 'Projects']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.sec',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
    });


});

function onClick() {
    $('.navbar-collapse a').on("click", function () {
        $(".navbar-collapse").collapse('hide');
    });
}