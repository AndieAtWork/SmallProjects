<?php

require '../config/database.php';
$db = new Database();
$con = $db->conectar();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Procesar los datos del formulario
    $method = $_POST['action-method'];

    if ($method == 'create'){

        $id = $_POST['identificador'];

        $idExistente = $con->prepare("SELECT * FROM categoria WHERE id_categoria = ?");
        $idExistente->execute([$id]);
        $resultId = $idExistente->fetch(PDO::FETCH_ASSOC);

        if ($resultId) { 
            header("Location: ../views/error_categoria.html");
            exit();
        }

        $nombreCategoria = $_POST['nombre'];

        $nombreExistente = $con->prepare("SELECT * FROM categoria WHERE nombre = ?");
        $nombreExistente->execute([$nombreCategoria]);
        $resultNombre = $nombreExistente->fetch(PDO::FETCH_ASSOC);

        if ($resultNombre) { 
            header("Location: ../views/error_categoria.html");
            exit();
        }

        $sql = $con->prepare("INSERT INTO categoria (id_categoria, nombre) VALUES (:id, :nombre)");
        $sql->bindParam(':id', $id, PDO::PARAM_INT);
        $sql->bindParam(':nombre', $nombreCategoria, PDO::PARAM_STR);

        $sql->execute();
        header("Location: ../views/lista_categorias.php");
        exit();

    }else if ($method == 'delete'){

        $id = $_POST['id-categoria'];

        $sql = $con->prepare("SELECT id_producto FROM producto WHERE categoria = :id");
        $sql->bindParam(':id', $id, PDO::PARAM_INT);
        $sql->execute();
        $resultado = $sql->fetch(PDO::FETCH_ASSOC);

        if (!$resultado){
            echo "No tiene productos asociados.";
            $sql = $con->prepare("DELETE FROM categoria WHERE id_categoria = :id");
            $sql->bindParam(':id', $id, PDO::PARAM_INT);
            $sql->execute();

            header("Location: ../views/lista_categorias.php");
            exit();

        }else{
            echo "Tiene productos asociados.";
            header("Location: ../views/error_borrar_categoria.html");
            exit();
        }

        

    }

} else {
    // El formulario no se envió correctamente, manejar según sea necesario
    echo "Error en el envío del formulario";
}
?>