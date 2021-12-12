<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$fullname = $_POST['fullname'];
$number = $_POST['number'];
$message = $_POST['message'];

// Формирование самого письма
$title = "message reception";
$body = "
<h2 style='color: tomato; font-size: 20px; text-decoration: uppercase;'>Новое письмо</h2>
<b>Тема сообщения:</b> $subject<br>
<b>Почта:</b> $email<br><br>
<b>Текст сообщения:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'ilimbaev.ilyas@gmail.com'; // Логин на почте
    $mail->Password   = 'cfpfalqsmxsnltfp'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@gmail.com', 'Сайт порфтолио'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ilyas.ilimbaev@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo "<div class='answer'>
        <div class='contact-form__success'>
            <h2>application accepted!</h2>
        </div>
    </div>";