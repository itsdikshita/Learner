var colors = ["green", "red", "pink", "yellow", "orange", "aqua", "maroon", "purple"];
var currentIndex = 0;

setInterval(function () {
    document.body.style.cssText = "background-color: " + colors[currentIndex];
    currentIndex++;
    if (currentIndex == undefined || currentIndex >= colors.length) {
        currentIndex = 0;
    }
}, 2000);