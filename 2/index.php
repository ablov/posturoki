<!doctype html>
<html lang="ru">
<head>
    <title>Grammar test example</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="CSS/main.css" rel="stylesheet" type="text/css">
</head>
<body>
<h1>Выберите упражнение</h1>
<div class="wrap">
<?php
    require_once "PHPLib/db_engine.inc";

    $db = new db_engine();
    $output = "";
    $tests = $db->getListOfTests(true);
    foreach ($tests as $test) {
        $output .= '<button class="title_button" onclick="location.href=\'test.php?ID=' . $test['ID'] . '\'">' . $test['Title'] . '</button>';
    }

print $output;
?>
</div>
</body>
