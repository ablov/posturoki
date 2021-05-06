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
<div class='wrap_test'>
  <?php
  require_once "PHPLib/db_engine.inc";

  $output = "";

  $db = new db_engine();
  if (key_exists("TestID", $_GET)) {
    $test = $db->getTheTest($_GET['TestID']);
  }

  if (isset($test) && is_array($test)) {
    $output .= "<h1>{$test['Title']}</h1>";
    $output .= "<p>1. Раскройте скобки и вставьте пропущенные буквы в слова, где это необходимо.<br>
    2. Расставьте недостающие знаки препинания.</p>";
    $output .= "<textarea id='myText' spellcheck='false'>{$test['Test']}</textarea>";
    $output .= "<button id='check'>Проверить</button>";
    $output .= "<div id='result'>{$test['KeyText']}</div>";
    print $output;
  }
  ?>
</div>
</body>
