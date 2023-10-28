<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer les données du formulaire
    $formData = json_decode(file_get_contents("php://input"));

    $name = $formData->Prénom;
    $lastName = $formData->Nom;
    $email = $formData->Email;
    $phone = $formData->Téléphone;
    $message = $formData->Message;

    // Configuration pour utiliser le serveur SMTP de Gmail
    ini_set("SMTP", "smtp.gmail.com");
    ini_set("smtp_port", "587");
    ini_set("sendmail_from", "gavinetm26@gmail.com");
    ini_set("sendmail_path", "\"C:\ENV\SENDMAIL\sendmail.exe\" -t");

    // Envoie de l'e-mail
    $to = "gavinetm26@gmail.com";
    $subject = "Nouveau message de contact";
    $body = "Nom: $name\nNom de famille: $lastName\nEmail: $email\nTéléphone: $phone\nMessage: $message";

    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo json_encode(["code" => 200]);
    } else {
        http_response_code(500);
        echo json_encode(["code" => 500]);
    }
} else {
    http_response_code(405);
    echo json_encode(["code" => 405, "message" => "Méthode non autorisée"]);
}

?>

