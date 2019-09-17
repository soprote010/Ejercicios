<?php
	/*Ficheros*/
	fopen("texto.txt","a");
	//fwrite(handle, string);
	//anteriormente
	//fputs(handle,string);
	/*FORMULARIO*/
	$asunto=$_POST['asunto'];
	$mensaje=$_POST['mensaje'];

	$solicitud = fopen("texto.txt","a") or die("No se pudo abrir para escribir");

	fwrite($solicitud, "ASUNTO: ");
	fwrite($solicitud, "\n");
	fwrite($solicitud, $asunto);
	fwrite($solicitud, "\n");
	fwrite($solicitud, "MENSAJE: ");
	fwrite($solicitud, "\n");
	fwrite($solicitud, $mensaje);
	fwrite($solicitud, "\n");
	echo "La operacion fue correcta, si quiere revisar visite el siguiente link:
	<a href='dos.php'> VER ESCRITURA</a>";
	fclose($solicitud);
?>