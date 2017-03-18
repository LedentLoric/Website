<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$adressePerso = "loric.ledent@gmail.com";
	
	$mail = trim($_POST["mail"]);
	$message = trim($_POST["message"]);
	$objet = trim($_POST["object"]);
	$contact = trim($_POST["name"])." ".trim($_POST["fname"]);

		
	$email_content = "Nom: $contact\n";
	$email_content .= "Email: $mail\n\n";
	$email_content .= "Message:\n$message\n";
	
	$email_headers = 'From: "Site Perso" <loric.ledent@free.fr>'."\n";
	$email_headers .= 'Return-Path: <loric.ledent@free.fr>'."\n";
	$email_headers .= "MIME-Version: 1.0\n";
	$email_headers .= 'To: Loric Ledent<loric.ledent@gmail.com>' . "\r\n";
	$email_headers .= "Content-Type: text/plain; charset=\"utf-8\"";
	
	if (mail($adressePerso, $objet, $email_content, $email_headers))
		echo "valid";
	
	else
		echo "error";
}

?>