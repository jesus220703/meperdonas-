var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('perdóname, si te hice sentir mal quiero seguir hablando contigo aunque ya no sea de amor pero quiero seguir hablando contigo porque eres importante para mi y pues no quiero dejar de hablarte ni perder tu amistad ni perderte a ti, y ya fuera de todo esto gracias por todo lo que hiciste por mi aprecio mucho esto y quiero que sepas que esto nunca lo voy a olvidar, graciaas');
});