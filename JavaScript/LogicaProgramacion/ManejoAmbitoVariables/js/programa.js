var nombre = null; //variable global

function mostrarNombre(cajaEntrada)
{
	nombre = cajaEntrada.value;
	var saludo = "Hola "+nombre.toUpperCase();

	/*Envia contenido dinamico a html,
	  mediante un identificador y mediante
	  el uso del metodo INNERHTML
	  */
	document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal(parametro)
{
	var nombre = parametro;
	alert("Hola "+nombre+" (local)");

	alert("Hola "+this.nombre+" (global)");
}

function saludarGlobal()
{
	alert("Hola "+nombre);
}

