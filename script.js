document.getElementById('increase-font').addEventListener('click', function() {
    changeFontSize(1);
});

document.getElementById('decrease-font').addEventListener('click', function() {
    changeFontSize(-1);
});

document.getElementById('toggle-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

function changeFontSize(direction) {
    var elements = document.querySelectorAll('body, body *');
    elements.forEach(function(element) {
        var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        element.style.fontSize = (currentSize + direction) + 'px';
    });
}
