console.log("Ejercicio nro 3"); // Titulo del script

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let cadena = prompt("Ingrese una cadena de texto");
let separador = prompt("Ingrese el caracter separador");

function separaTexto(str, char) {
  alert("Array resultante: " + str.split(char));
}

separaTexto(cadena, separador);
