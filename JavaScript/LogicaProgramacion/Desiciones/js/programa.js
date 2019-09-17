function determinaClasificacionPorEdades(entrada)
{
	var resultado=null;
	var edad=entrada.value;

	if(edad>0 && edad <12)
	{
		resultado = "AA y A";
	}
	else if(edad >=12 && edad<15)
	{
		resultado ="B,AA Y AA";

	}
	else if(edad >=15 && edad <18)
	{
		resultado ="B15, AA,A";
	}
	else if(edad >=18 && edad<21)
	{
		resultado="C,B15,AA,A";
	}
	else if(edad>=21 && edad <=121)
	{
		resultado ="Puedes ver todo";
	}
	else if(edad>122)
	{
		resultado="Eroor";
	}
	else
	{
		resultado="Valor erroneo";
	}

	document.getElementById("resultado").innerHTML = resultado;
}