<?php

/* Values received via ajax */
$id = $_POST['id'];
$title = $_POST['title'];
$start = $_POST['start'];
$end = $_POST['end'];
$user = 'root';
$password = 'root';
$db = 'pryia_db';
$host = '127.0.0.1';
$port = "3306";

// connection to the database
try {
    $bdd = new mysql_connect(
        "$host:$port", 
        $user, 
        $password
     );
    // $bdd = new mysqli_connect('mysql:host=localhost;dbname=pryia_db', 'root', 'root');
} catch (Exception $e) {
    exit('Unable to connect to database.');
}
// update the records
$sql = "UPDATE events SET title=?, start=?, end=? WHERE id=?";
$q = $bdd->prepare($sql);
$q->execute(array($title, $start, $end, $id));
?>