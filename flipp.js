document.addEventListener('DOMContentLoaded', function() {
    var flipContainers = document.querySelectorAll('.flip-container');

    flipContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            var flipper = container.querySelector('.flipper');
            flipper.classList.toggle('flip');
        });
    });
});
