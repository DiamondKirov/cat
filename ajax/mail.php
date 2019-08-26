<?php

$name = trim($_POST["name"]);
$weight = trim($_POST["weight"]);
$age = trim($_POST["age"]);
$program = trim($_POST["program"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$add = trim($_POST["add"]);

$mail = "diamondkirov@gmail.com";

$message = "Имя - $name, Вес - $weight, Возраст - $age \n Программа - $program \n\n Связь: $email   $phone \n Коментарий от пользователя \n $comment \n\n Добавки: $add";

mail($mail, 'Сайт для резюме', $message);

?>