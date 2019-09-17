<?php
session_start();//inicializamos la sesion
session_unset();//liberamos la memmoria
session_destroy();
header('location: sesiones.php');
?>