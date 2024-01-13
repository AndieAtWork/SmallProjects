<?php

require 'config/database.php';
$db = new Database();
$con = $db->conectar();

include 'views/home.html';

?>