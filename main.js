$(function () {
    $.get("parts/Nav.html", function (data) {
        $("body").prepend(data);
    });
    $.get("parts/Hero.html", function (data) {
        $("#Hero").append(data);
    });
    $.get("parts/Skills-Edu.html", function (data) {
        $("#Skills-Edu").append(data);
    });
    $.get("parts/Experience.html", function (data) {
        $("#Experience").append(data);
    });
    $.get("parts/Projects.html", function (data) {
        $("#Projects").append(data);
    });
});