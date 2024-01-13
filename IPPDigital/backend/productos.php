<?php

require '../config/database.php';
$db = new Database();
$con = $db->conectar();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Procesar los datos del formulario
    $method = $_POST['action-method'];

    if ($method == 'create'){
        
        $id = $_POST['identificador'];
        $nombreProducto = $_POST['nombre'];

        $idExistente = $con->prepare("SELECT * FROM producto WHERE id_producto = ?");
        $idExistente->execute([$id]);
        $resultId = $idExistente->fetch(PDO::FETCH_ASSOC);

        if ($resultId) { 
            header("Location: ../views/error_producto.html");
            exit();
        }

        $nombreExistente = $con->prepare("SELECT * FROM producto WHERE nombre = ?");
        $nombreExistente->execute([$nombreProducto]);
        $resultNombre = $nombreExistente->fetch(PDO::FETCH_ASSOC);

        if ($resultNombre) { 
            header("Location: ../views/error_producto.html");
            exit();
        }

        $descripcion = $_POST['descripción'];
        $precioProducto = $_POST['precio'];
        $categoria = $_POST['categoria'];

        if (isset($_FILES['imagen'])) {
            // Manejar la carga de archivos aquí
            $archivoNombre = $_FILES['imagen']['name'];
            $archivoTipo = $_FILES['imagen']['type'];
            $archivoTamanio = $_FILES['imagen']['size'];
            $archivoTmpName = $_FILES['imagen']['tmp_name'];

            // Mover el archivo a la ubicación deseada
            $parts = explode(".", $archivoNombre);
            $extension = end($parts);

            $nuevoNombre = $id . "." . $extension;
            move_uploaded_file($archivoTmpName, '../public/images/' . $nuevoNombre);

            $sql = $con->prepare("INSERT INTO producto (id_producto, nombre, descripcion, precio, categoria, imagen) VALUES (:id, :nombre, :descripcion, :precio, :categoria, :imagen)");
            
            $sql->bindParam(':id', $id, PDO::PARAM_INT);
            $sql->bindParam(':nombre', $nombreProducto, PDO::PARAM_STR);
            $sql->bindParam(':descripcion', $descripcion, PDO::PARAM_STR);
            $sql->bindParam(':precio', $precioProducto, PDO::PARAM_INT);
            $sql->bindParam(':categoria', $categoria, PDO::PARAM_INT);
            $sql->bindParam(':imagen', $nuevoNombre, PDO::PARAM_STR);

            $sql->execute();
            header("Location: ../views/lista_productos.php");
            exit();

        }
    }else if ($method == 'delete'){

        $id = $_POST['id-producto'];

        $sql = $con->prepare("SELECT imagen FROM producto WHERE id_producto = :id");
        $sql->bindParam(':id', $id, PDO::PARAM_INT);
        $sql->execute();
        $resultado = $sql->fetch(PDO::FETCH_ASSOC);
        $imagen = $resultado['imagen'];

        $path = '../public/images/' . $imagen;
        if (file_exists($path)) {
            if (unlink($path)) {
                echo "File deleted successfully.";
            } else {
                echo "Error deleting file: " . $path;
            }
        } else {
            echo "File does not exist: " . $path;
        }

        $sql = $con->prepare("DELETE FROM producto WHERE id_producto = :id");
        $sql->bindParam(':id', $id, PDO::PARAM_INT);
        $sql->execute();

        header("Location: ../views/lista_productos.php");
        exit();

    }

} else {
    // El formulario no se envió correctamente, manejar según sea necesario
    echo "Error en el envío del formulario";
}
?>