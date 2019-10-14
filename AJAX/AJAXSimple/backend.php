<?php
	/*enviar al navegador*/
	//echo "Hello Word con AJAX";
	//comprobar si se esta recibiendo y regresarlo
	if(isset($_POST)) //isset es equivalente a exists
	{
		echo "Recibidooooo: ". $_POST['username'];
	}
?>