function mostrarNombre(cajaEntrada)
{
	var nombre = cajaEntrada.value;
	var saludo = "Hola "+nombre.toUpperCase();

	/*Envia contenido dinamico a html,
	  mediante un identificador y mediante
	  el uso del metodo INNERHTML
	  */
	document.getElementById("resultado").innerHTML = saludo;
}