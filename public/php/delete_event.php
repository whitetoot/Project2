<?php
$id = $_POST['id'];
$user = 'root';
$password = 'root';
$db = 'calendar';
$host = '127.0.0.1';
$port = "3306";

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
$sql = "DELETE from events WHERE id=" . $id;
$q = $bdd->prepare($sql);
$q->execute();
?>
