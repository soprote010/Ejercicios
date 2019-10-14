<?php
    include('database.php');

    $id = $_POST['id'];
    $query = "SELECT * FROM tareas where id = $id";

    $result= mysqli_query($conecction, $query);
    if(!$result)
    {
        die('Error'.mysqli_error($conecction));
    }
    $json = array();
    while ($row= mysqli_fetch_array($result))
    //echo "Tarea eliminada correctamente";
    {
        $json[] = array
        (
            'name' => $row['name'],
            'description' => $row['description'],
            'id' =>$row['id']
        );
    }

    $jsonstring=json_encode($json[0]);
    echo $jsonstring;
?>