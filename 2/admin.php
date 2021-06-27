<?php

require_once "PHPLib/db_engine.inc";

const PASSWORD_MD5="9cce20fbc734a63ea2eecde6d30fb0ba";

if(isset($_POST['password'])) {
  if (strcmp($_POST['password'], PASSWORD_MD5) == 0) {
    session_start();
    session_destroy();
    session_start();
    $_SESSION['signed_in'] = true;
  }
} else {
    session_start();
}
if (isset($_POST['Action']) && isset($_POST['TestID'])) {
    if (!strcmp($_POST['Action'], "DELETE")) {
      $db = new db_engine();
      if ($db->removeTest($_POST['TestID'])) {
        http_response_code(200);
      } else {
        http_response_code(400);
      }
      $db = null;
      exit();
    }

    elseif (!strcmp($_POST['Action'], "TOGGLE")) {
      $db = new db_engine();
      if ($db->toggleTest($_POST['TestID'])) {
        http_response_code(200);
      } else {
        http_response_code(400);
      }
    }
    $db = null;
    exit();
}
if (!isset($_SESSION['signed_in'])) {
  include "login.inc";
  exit();
}

$db = new db_engine();
$tests = $db->getListOfTests();
?>

<!doctype html>
<html lang="ru">
<head>
  <title>Grammar test admin page</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="CSS/admin.css" rel="stylesheet" type="text/css">
  <!-- jQuery  -->
  <script src="https://code.jquery.com/jquery-3.3.0.min.js"
          integrity="sha256-RTQy8VOmNlT6b2PIRur37p6JEBZUE7o8wPgMvu18MC4="
          crossorigin="anonymous"></script>
  <script src="JS/admin.js"></script>
</head>
<body>
<h1>Список загруженных в базу тестов</h1>
<div class="list">
<?php
  foreach ($tests as $test) {
    $iconCorrect = $test['IsCorrect'] ? 'Yes.gif' :  'No.gif';
    $iconActive = $test['IsActive'] ? 'Visible.png' : 'Invisible.png';

    $output = "<div class='list_line'>";
    $output .= "<div class='test_icons'>";
    $output .= "<img class='test_icon' src='Images/" . $iconCorrect . "' alt='Is test correct?' title='Тест скомпилирован?'>";
    $output .= "<img id='v" . $test['ID'] . "' class='test_icon clickable' src='Images/" . $iconActive .
      "' alt='Is test active?' title='Тест опубликован?' onclick='toggleTest(" . $test['ID'] . ");'>";
    $output .= "</div>"; // test icons
    $output .= "<div class='test_title'>{$test['Title']}";
    $output .= "</div>"; // title
    $output .= "<div class='test_buttons'>";
    $output .= "<div class='test_edit' onclick='editTest({$test['ID']})'>Изменить</div>";
    $output .= "<div class='test_remove' onclick='removeTest({$test["ID"]}, \"{$test['Title']}\")'>Удалить</div>";
    $output .= "</div>"; // test buttons
    $output .= "</div>";
    echo $output;
  }
?>
  <div class="add_button" id="addButton">Добавить тест</div>
</div>
</body>
</html>
