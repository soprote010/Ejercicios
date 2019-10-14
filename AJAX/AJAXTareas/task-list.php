<?php
    include('database.php');
    $query = "SELECT * from tareas";

    $result= mysqli_query($conecction, $query);
    if(!$result)
    {
        die('Error'.mysqli_error($conecction));
    }

    while($row = mysqli_fetch_array($result))
    {
        $json[] =  array
        (
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']
        );
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
?>