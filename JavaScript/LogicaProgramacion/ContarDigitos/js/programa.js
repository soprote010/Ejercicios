document.write("programa para contar el numero de digitos de un entero positivo <br/>");

var num = parseInt(prompt("Proporcione un numero: ",1));//prompt regresa una cadena de tipo string

var contador_digitos=0;

while (num >=1)
{
	num = num/10;
	contador_digitos++;
}

document.write("<br/> El numero proporcionado contiene "+ contador_digitos + " digitos");