<?php
    include('database.php');

    $id= $_POST['id'];
    $name= $_POST['name'];
    $description= $_POST['description'];
     
    $query = "UPDATE tareas SET name='$name', description ='$description' where id='$id'";

    $result= mysqli_query($conecction, $query);
    if(!$result)
    {
        die('Error'.mysqli_error($conecction));
    }
    echo "Tarea actulizada correctamente";
?>