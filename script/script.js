// script para fazer o menu mudar de cor
(function() {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 280) menu.classList.add('menuScroll');
        else menu.classList.remove('menuScroll');
        if (window.scrollY < 280) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();

//mascarar os input. funciona somente com jQuery
$(document).ready(function() {
    $('#phone-number').mask('(00) 00000-0000');

});