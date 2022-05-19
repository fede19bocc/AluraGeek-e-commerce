var botonLogin = document.querySelector(".encabezado__login");
var botonBanner = document.querySelector('.banner__boton');

botonLogin.addEventListener('click', function (evento) {
    open("./login.html", "_self");
});

botonBanner.addEventListener('click', function (evento) {
    location.hash = '#' + 'consolas';
});
