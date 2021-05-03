<?php

include "PHPLib/validate.inc";

require_once "PHPLib/db_engine.inc";
$db = new db_engine();

// add edited record to database if everything set
if (isset($_POST['ID']) && isset($_POST['Title']) && isset($_POST['Test']) && isset($_POST['KeyText'])
  && !empty($_POST['ID']) && !empty($_POST['Title']) && !empty($_POST['Test']) && !empty($_POST['KeyText'])) {
  $success = $db->editTest($_POST['ID'], $_POST['Title'], $_POST['Test'], $_POST['KeyText']);
  if ($success) {
    $message = "Тест успешно Сохранён!";
    $class = "success";
  }
  else {
    $message = "Внимание! При добавлении нового теста произошла ошибка! Попробуйте ещё раз или обратитесь к разработчику.";
    $class = "error";
  }
  $output = <<<MESSAGEBOX
<div class='message_box'>
<p class="$class">$message</p>
<button onclick="window.location.href='admin.php'">Вернуться</button>
</div>
MESSAGEBOX;
}

// Вывод формы для редактирования теста
elseif (isset($_GET['TestID'])) {
  $test = $db->getTheTest($_GET['TestID']);
  $output = <<<INPUTFORM
<div class='input_form'>
<h1>Редактирование теста</h1>
<form method="post" action="edit.php">
<input name="ID" type="hidden" value="{$_GET['TestID']}">
<label>Заголовок теста:&nbsp
    <input type="text" name="Title" spellcheck="true" value="{$test['Title']}">
</label>
<p>Тестовое задание:</p>
<textarea name="Test" rows="6" cols="70" spellcheck="false">{$test['Test']}</textarea>
<p>Ключ:</p>
<textarea name="KeyText" rows="6" cols="70" spellcheck="true">{$test['KeyText']}</textarea>
<button type="submit">Сохранить</button>
</form>
</div>
INPUTFORM;
}

else {
    $output = <<<ERROR
<div class='message_box'>
<p class="error">Форма не предназначена для вызова без параметров.</p>
<button onclick="window.location.href='admin.php'">Вернуться</button>
</div>
ERROR;

}
?>

<!doctype html>
<html lang="ru">
<head>
  <title>Grammar new test form</title>
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
<?php echo $output; ?>
</body>
</html>

