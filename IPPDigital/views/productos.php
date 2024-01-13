<?php

require '../config/database.php';
$db = new Database();
$con = $db->conectar();

$sql = $con->prepare("SELECT id_categoria, nombre FROM categoria");
$sql->execute();
$resultado = $sql->fetchAll(PDO::FETCH_ASSOC);

include 'productos.html';

?>