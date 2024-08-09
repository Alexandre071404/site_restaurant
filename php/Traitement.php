<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = filter_input(INPUT_POST, "nom", FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    $message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);

    if ($nom && $email && $message) {
        $destinataire = "";//mail du restau
        $sujet = "Nouveau message de ".htmlspecialchars($nom)." !";
        $corpsMessage = "Nom : ".htmlspecialchars($nom)."\n";
        $corpsMessage .= "E-mail : ".htmlspecialchars($email)."\n";
        $corpsMessage .= "Message :\n$message";


        $headers = "From: \r\n";
        mail($destinataire, $sujet, htmlspecialchars($corpsMessage), $headers);
        header("Location: confirmation.html");
    }
    else {
        header("Location: index.html");
    }
} else {
    header("Location: index.html");
}
/*

version php mailer mais à poursuivre 

PHP mailer github.com/PHPMailer/PHPMailer 

include("../PHPMailer/src/PHPMailer.php");



if (isset($_POST)){
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $destinataire = "";
    $sujet = "Nouveau message de $nom";
    $corpsMessage = "Nom : $nom\n";
    $corpsMessage .= "E-mail : $email\n";
    $corpsMessage .= "Message :\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mail = new PHPMailer(true);
    try {
        $mail->setFrom($email);
        $mail->addAddress($destinataire);
        $mail->Subject = $sujet;
        $mail->Body = $corpsMessage;
        $mail->send();
        header("Location: ");
    } 
    catch (Exception $e) {
        echo "Erreur lors de l'envoi du message : {$mail->ErrorInfo}";
    }
   
} 
else {
    header("Location:");
}*/
?>

 <script>
                function getCurrentDateTime() {
                    const now = new Date();
                    const roundedMinutes = Math.ceil(now.getMinutes()/15)*15; 
                    now.setMinutes(roundedMinutes);
                    now.setSeconds(0);  // Assurer que les secondes sont à zéro
                    now.setMilliseconds(0);
                    const roundedHours = Math.floor(now.getHours() + (roundedMinutes / 60)) % 24;
                    now.setHours(roundedHours+1);
                    const DateTimeformat = now.toISOString().slice(0, 16);
        
                    return DateTimeformat;
                }
        
                //document.getElementById("date").value = getCurrentDateTime();
                document.getElementById("date").min = getCurrentDateTime();

            </script>