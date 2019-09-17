function manejoArreglos()
{
	var lengua = null;
	//definicmos el erreglo
	var lenguas = new Array();
	lenguas[0] = "chino mandarin";
	lenguas[1] = "español";
	lenguas[2] = "ingles";
	lenguas[3] = "hindi";

	//lectura del arreglo
	for (i=0; i<lenguas.length;i++)
	{
		//accedemos a cada elemento de arreglo
		lengua=lenguas[i];
		//impirmimos los elementos de arreglo
		imprimir(lengua);
	}
}

function imprimir(valor)
{
	document.getElementById("resultado").innerHTML +=valor+" ";
}
function limpiar()
{
	document.getElementById("resultado").innerHTML="";
}