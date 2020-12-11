<?php
$to = "erotush77@gmail.com";
$subject = $_POST["msg_subject"];
$txt = "Hi, " . $_POST["name"] . "\r\n" . $_POST["message"] . "\r\n"."Regards" ;
$headers = "From: " . $_POST["email"] . "\r\n";

echo($to .", ". $subject.", ". $txt.", ".$headers);
?>
