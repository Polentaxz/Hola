console.log("Mensaje de prueba");
function enviar() {
    var nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre + " :)");
}
function cambiarContenido() {
    var elemento = document.getElementById("miBoton");
    elemento.innerHTML = "¡Producto agregado!";
}
var elemento = document.getElementById("mi-elemento");
elemento.style.color = "red";
function guardarComentario() {
    var comentario = document.getElementById("comentario").value;
    var comentariosDiv = document.getElementById("comentarios");
    var nuevoComentario = document.createElement("p");
    nuevoComentario.innerHTML = comentario;
    comentariosDiv.appendChild(nuevoComentario);
}
