<?php
// List of events
$json = array();
$user = 'root';
$password = 'root';
$db = 'calendar';
$host = '127.0.0.1';
$port = "3306";


// Query that retrieves events
$request = "SELECT * FROM events ORDER BY id";

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
// Execute the query
$result = $bdd->query($request) or die(print_r($bdd->errorInfo()));

// sending the encoded result to success page
echo json_encode($result->fetchAll(mysqli_connect::FETCH_ASSOC));

?>
