<?php

$name = trim($_POST["name"]);
$weight = trim($_POST["weight"]);
$age = trim($_POST["age"]);
$program = trim($_POST["program"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$add = " ";

    if (trim($_POST["vitamins"]) == true ){
        $add = $add + " Витамины";
    }
    if (trim($_POST["Water"]) == true ){
        $add = $add + " Питьевая вода";
    }

    if (trim($_POST["milk"]) == true ){
        $add = $add + " Молоко";
    }

    if (trim($_POST["nosugar"]) == true ){
        $add = $add + " Витамины";
    }


$mail = "diamondkirov@gmail.com";

$message = "Имя - $name, Вес - $weight, Возраст - $age \n Программа - $program \n\n Связь: $email   $phone \n Коментарий от пользователя \n $comment \n\n Добавки: $add";

mail($mail, 'Сайт для резюме', $message);

?>
