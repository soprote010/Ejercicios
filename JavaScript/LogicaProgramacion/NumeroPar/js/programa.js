document.write("Programa para determinar si un número es par: <br/>");

var num = parseInt(prompt("Proporcione un numero: ",1));//prompt regresa una cadena de tipo string

if(num>=0)
{
	if(num%2==0)
	{
		document.write("SI es un numero par");
	}
	else
	{
		document.write("NO es un numero par");
	}
}
else
{
	document.write("Proporcione un valor entero y mayor que cero");
}
document.write("\n<br>El valor proporcionado fue: " + num);