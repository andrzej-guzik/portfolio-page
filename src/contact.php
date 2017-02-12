<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

		if (!empty($_POST["name"]) {
        	$name = $_POST["name"];
		} else {
			$name = "Anonimowy";
		}

        $email = $_POST["email"];

		if (!empty($_POST["phone"]) {
			$phone = $_POST["phone"];
		} else {
			$phone = "Brak";
		}

        $message = wordwrap($_POST["message"], 70);

        $recipient = "a.guzik80@gmail.com";
        $subject = "Nowa wiadomość od $name";

		$email_content = "Imię: $name\n";
		$email_content .= "Telefon: $phone\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Wiadomość:\n$message\n";

        $email_headers = "Od: $name <$email>";

		mail($recipient, $subject, $email_content, $email_headers);
?>
