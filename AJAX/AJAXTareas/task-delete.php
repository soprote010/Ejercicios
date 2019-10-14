<?php
    include('database.php');

    if(isset($_POST['id']))
    {
        $id = $_POST['id'];
    }
    $query = "DELETE FROM tareas where id=$id";
    $result= mysqli_query($conecction, $query);
    if(!$result)
    {
        die('Error'.mysqli_error($conecction));
    }

    echo "Tarea eliminada correctamente";
?>