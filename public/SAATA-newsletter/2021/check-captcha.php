<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

//Continue the session
session_start();

$scode=$_GET['scode'];

if ( ($scode == $_SESSION["sess_security_code"]) &&  (!empty($scode) && !empty($_SESSION["sess_security_code"])) ) 
echo "Valid";
else
echo "Invalid security code. Please try again.";
?>