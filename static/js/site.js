document.addEventListener('DOMContentLoaded', function() {
    var img = $('#nura');
    var lines = $('#lines');
    var content = $('#content');
    var heightDifference = lines.offsetHeight - content.offsetHeight;
    img.style.height = heightDifference + 'px';
});