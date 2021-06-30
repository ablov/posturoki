<?php
$output = <<<HEADER
<!doctype html>
<html lang="ru">
<head>
    <title>Grammar test example</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="CSS/test.css" rel="stylesheet" type="text/css">
    <!-- jQuery  -->
    <script src="https://code.jquery.com/jquery-3.3.0.min.js"
            integrity="sha256-RTQy8VOmNlT6b2PIRur37p6JEBZUE7o8wPgMvu18MC4="
            crossorigin="anonymous"></script>
    <script src="JS/test.js"></script>
</head>
HEADER;


if (!isset($_GET['ID'])) {
    $output .= <<<BODY
<body>
<h1 class="error">Не указан номер теста</h1>
</body>
</html>
BODY;
    echo $output;
    exit();
}

require_once "PHPLib/db_engine.inc";
$db = new db_engine();

if (!($test=$db->getTheTest($_GET['ID']))) {
  $output .= <<<BODY
<body>
<h1 class="error">Произошла ошибка при считывании данных</h1>
</body>
</html>
BODY;
  echo $output;
  exit();
}

$output .= <<<BODY
<body>
<div class="hidden" id="keys">{$test['KeysSet']}</div>
<div class="wrap">
    <h1>{$test['Title']}</h1>
    <h2>{$test['Task']}</h2>
    <div id="myText">{$test['ResultHTML']}</div>
    <div class="resultBlock">
        <button id="check">Проверить</button>
        <div id="result" class="hidden"></div>
    </div>
</div>
</body>
</html>
BODY;

echo $output;
exit();