<?php
	//enviar al navegador
	//echo "Hello Word con AJAX";
	//comprobar si se esta recibiendo y regresarlo
	if(isset($_POST))
	{
		echo "Recibido: ". $_POST['username'];
	}
?>