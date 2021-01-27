// script para fazer o menu mudar de cor
(function () {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 280) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();