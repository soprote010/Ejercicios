<?php
/*Se inicia la declaracion global de variables*/
//session_start();
/*Obtencion de los datos de la variable global*/
//echo $_SESSION['nombre'];
//echo 'Tu edad es: '.$_SESSION['edad'];
/*FORMULARIO*/
$user="francisco";
$password="123";

if($_POST['usuario']==$user && $_POST['contrasena']==$password )
{
	session_start();
	$_SESSION['usuario']="Francisco Minajas";
	$_SESSION['pais']="Mex";
	//esta te envia a otra pagina
	header('location: dos.php');
}
else
{
	echo "Su nombre de USUARIO o CONTRASEÑA es incorrecto, intentelo de nvo";
	echo "<a href='sesiones.php'>INTENTELO DE NVO</a>";
}
?>