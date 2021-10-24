let time = 0;

window.onload = function () {
    let elements = document.getElementsByClassName("fadeIn");
    Array.prototype.forEach.call(elements, function (element) {
        show(element);
    });
};

function show(element) {
    setTimeout(function () {
        element.style.opacity = "1";
    }, time);
    time += 1000;
}