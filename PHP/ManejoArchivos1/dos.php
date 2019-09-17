<?php
	$solicitud = fopen("texto.txt","r") or die("No se pudo abrir para leer");

	while(!feof($solicitud))
	{
		$leer = fgets($solicitud);
		$ver = nl2br($leer);
		echo $ver;
	}
?>