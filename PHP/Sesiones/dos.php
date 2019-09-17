<?php
session_start();
/*Obtencion de los datos de la variable global*/
//echo $_SESSION['nombre'];
/*FORMULARIO*/
echo "Bienvenido".$_SESSION['usuario']."<br>";
echo "Su paies es".$_SESSION['pais']."<br>";

echo "<a href='tres.php'>Cerrar Sesion</a>"
?>