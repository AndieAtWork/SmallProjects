<?php

require '../config/database.php';
$db = new Database();
$con = $db->conectar();

$sql = $con->prepare("SELECT id_producto, producto.nombre as nombre_producto, descripcion, precio, c.nombre as nombre_categoria, imagen FROM producto
                    inner join categoria c on producto.categoria  = c.id_categoria");
$sql->execute();
$resultado = $sql->fetchAll(PDO::FETCH_ASSOC);

function truncarDescripcion($inputString, $maxLength) {
    if (strlen($inputString) > $maxLength) {
        $truncatedString = substr($inputString, 0, $maxLength) . "...";
        return $truncatedString;
    } else {
        return $inputString;
    }
}

include 'lista_productos_administracion.html';

?>