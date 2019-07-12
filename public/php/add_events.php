<?php
// Values received via ajax
$title = $_POST['title'];
$start = $_POST['start'];
$end = $_POST['end'];
$user = 'root';
$password = 'root';
$db = 'calendar';
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
    exit($e);
}

// insert the records
$sql = "INSERT INTO events (title, start, end) VALUES (:title, :description, :start, :end )";
$q = $bdd->prepare($sql);
$q->execute(array(':title' => $title, ':start' => $start, ':end' => $end));
?>