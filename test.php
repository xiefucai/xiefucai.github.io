<?php
$arrayName = array('post' => $_POST, "get" => $_GET, "cookies" => $_SERVER['cookies'],'laozi12345'=>md5("laozi12345"));
echo json_encode($arrayName);
?>