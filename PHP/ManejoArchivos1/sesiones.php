<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form method="POST" action="uno.php">
		Asunto: <input type="text" name="asunto"><br>
		Mensaje: <textarea name="mensaje" rows="10" cols="30"></textarea>
		<input type="submit" name="ENVIAR">
	</form>
</body>

</html>
<?php
/*Se inicia la declaracion global de variables*/
session_start();
/*variables de sesion*/
/*Elimina la fusion y deja espacio para las variables actuales*/
//session_unset();
//session_destroy();
/*Elimina todos los datos de la sesion actual*/
/*Creamos las variables de sesion OBSOLETO*/
//$nombre="francisco minajas";
//session_register($nombre)
/*En las versiones actuales de PHP se debe usar esta forma*/
//$_SESSION['nombre']="francisco minajas";
//$_SESSION['edad']=15;
/*FORMULARIO*/

?>