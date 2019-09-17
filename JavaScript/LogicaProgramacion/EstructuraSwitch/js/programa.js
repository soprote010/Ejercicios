function determinarDiaSegunFecha(entrada)
{
	var fechaTexto=null;
	//recuperar la fecha
	//objeto de tipofecha
	var fecha = new Date(entrada.value);
	var dia = fecha.getDay();

	switch( dia)
	{
		case 0:
			fechaTexto="El dia es Lunes";
			break;
		case 1:
			fechaTexto="El dia es Martes";
			break;
		case 2:
			fechaTexto="El dia es Miercoles";
			break;
		case 3:
			fechaTexto="El dia es Jueves";
			break;
		case 4:
			fechaTexto="El dia es Viernes";
			break;
		case 5:
			fechaTexto="El dia es Sabado";
			break;
		case 6:
			fechaTexto="El dia es Domingo";
			break;
		default:
			fechaTexto="Error de fecha";
			break;
	}
	document.getElementById("resultado").innerHTML=resultado;
}