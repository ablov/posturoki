<?php
include "PHPLib/validate.inc";
?>
<!doctype html>
<html lang="ru">
<head>
    <title>Grammar new test form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="CSS/admin.css" rel="stylesheet" type="text/css">
</head>
<body>

<div class='input_form'>
    <h1>Введите необходимые данные нового теста</h1>
    <form method="post" action="edit.php">
        <label>Заголовок теста:&nbsp
            <input type="text" name="Title" spellcheck="true">
        </label>
        <label>Задание:<br>
            <textarea class="small_text" name="Task" rows="2" cols="70" spellcheck="true"></textarea>
        </label>
        <label>
        Тестовое задание:<br>
            <textarea class="big_text" name="Test" rows="6" cols="70" spellcheck="false"></textarea>
        </label>
        <label>
        Ключ:<br>
            <textarea class="big_text" name="KeyText" rows="6" cols="70" spellcheck="true"></textarea>
        </label>
        <button type="submit">Сохранить</button>
    </form>
</div>
</body>
</html>

