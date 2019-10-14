<?php
    include('database.php');
    
    
    $search = $_POST['search'];
    if(!empty($search))
    {
        $query = "SELECT * FROM tareas where name like '$search%'";
        $result= mysqli_query($conecction, $query);
        if(!$result)
        {
            die('Error'.mysqli_error($conecction));
        }

        $json=array();
        while($row=mysqli_fetch_array($result))
        {
            $json[] = array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id']
            );
        }

        $jsonstring=json_encode($json);
        echo $jsonstring;
    }
?>