<?php
    include('database.php');
    if(isset($_POST['name']))
    {
        $name = $_POST['name'];
        $description = $_POST['description'];

        $query = "INSERT INTO tareas (name, description) VALUES ('$name', '$description');";

        $result= mysqli_query($conecction, $query);
        if(!$result)
        {
            die('Error'.mysqli_error($conecction));
        }

        echo 'Tarea agregada satisfactoriamente';

    }
?>