function manejoMatrices()
{
	var dato = null;
	/*
	Definicion de la Matriz A
	[a b c]
	[d e f]
	[g h i]
	*/
	// arreglos individuales
	var a1 = new Array();
	//renglon 0
	a1[0] = 'a';
	a1[1] = 'b';
	a1[2] = 'c';

	//renglon 1
	var a2 = new Array();
	a2[0] = 'd';
	a2[1] = 'e';
	a2[2] = 'f';

	//renglon 2
	var a3 = new Array();
	a3[0] = 'g';
	a3[1] = 'h';
	a3[2] = 'i';

	//creamos un arrelo de arreglos
	var a = new Array();
	a[0] = a1;
	a[1] = a2;
	a[2] = a3;

	//recorrer la matriz
	for(i=0; i<a.length; i++)
	{
		//recorrer cada arreglo individual
		for (j=0; j<a[i].length; j++)
		{
			//imprimir cada elemento del arreglo
			dato = a[i][j];
			imprimir(dato);
		}
		imprimir("<br/>")
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