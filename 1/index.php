<!doctype html>
<html lang="ru">
<head>
    <title>Grammar test example</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="CSS/main.css" rel="stylesheet" type="text/css">
    <!-- jQuery  -->
    <script src="https://code.jquery.com/jquery-3.3.0.min.js"
            integrity="sha256-RTQy8VOmNlT6b2PIRur37p6JEBZUE7o8wPgMvu18MC4="
            crossorigin="anonymous"></script>
    <script src="JS/main.js"></script>
</head>
<body>
<h1>Выберите упражнение</h1>
<div class="wrap">
<?php
    require_once "PHPLib/db_engine.inc";

    $db = new db_engine();
    $output = "";
    $tests = $db->getListOfTests();
    foreach ($tests as $test) {
        $output .= '<button class="title_button" onclick="openTest(' . $test['ID'] . ')">' . $test['Title'] . '</button>';
    }

print $output;
?>
</div>
</body>
