<?php
$miPais = $_POST['pais'];
	setcookie("nuestroPais","$miPais",time()+3600);
	/*
	setcookie('pais','mexico',time()+3600,'/','localhost',$_SERVER('HTTPS'));
	nombre
	valor
	expiracion
	path
	dominio
	secure*/
	echo $_COOKIE['nuestroPais']; 
?>