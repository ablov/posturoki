<?php

include "PHPLib/validate.inc";

require_once "PHPLib/db_engine.inc";

// add new record to database if everything set
if (isset($_POST['Title']) && isset($_POST['Test']) && isset($_POST['KeyText'])
&& !empty($_POST['Title']) && !empty($_POST['Test']) && !empty($_POST['KeyText'])) {
  $db = new db_engine();
  $success = $db->addNewTest($_POST['Title'], $_POST['Test'], $_POST['KeyText']);
  if ($success) {
    $message = "Новый тест успешно добавлен!";
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

// Вывод формы для добавления нового теста
else {
  $output = <<<INPUTFORM
<div class='input_form'>
<h1>Введите необходимые данные нового теста</h1>
<form method="post" action="add.php">
<label>Заголовок теста:&nbsp
    <input type="text" name="Title" spellcheck="true">
</label>
<p>Тестовое задание:</p>
<textarea name="Test" rows="6" cols="70" spellcheck="false"></textarea>
<p>Ключ:</p>
<textarea name="KeyText" rows="6" cols="70" spellcheck="true"></textarea>
<button type="submit">Сохранить</button>
</form>
</div>
INPUTFORM;
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

