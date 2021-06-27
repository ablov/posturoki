<?php

include "PHPLib/validate.inc";

require_once "PHPLib/generator.inc";
require_once "PHPLib/db_engine.inc";
$db = new db_engine();

$ID = null;
$status = "New";
$testIndex = 0;
$keyIndex = 0;
$pageTitle = "Введите необходимые данные нового теста";
$output = "";
$title = "";
$task = "";
$test = "";
$key = "";
$testFragment = "";
$keyFragment = "";


// Prepare and add new record to database if everything set
if (isset($_POST['Title']) && isset($_POST['Task']) && isset($_POST['Test']) && isset($_POST['KeyText'])
  && !empty($_POST['Title']) && !empty($_POST['Test']) && !empty($_POST['KeyText'])) {

  if (!(isset($_GET['ID']) || isset($_POST['ID']))) {
    // Store raw data to database
    $ID = $db->createNewTest($_POST['Title'], $_POST['Task'], $_POST['Test'], $_POST['KeyText']);
  } else { // Update existing test
    $ID = $_POST['ID'];
    $db->editTest($ID, $_POST['Title'], $_POST['Task'], $_POST['Test'], $_POST['KeyText']);
  }
  if ($ID) {

    // Try to generate the test
    $result = prepareTest($_POST['Test'], $_POST['KeyText']);

    if ($result["status"] == "Success") {
      $success = $db->completeTheTest($ID, $result['resultHTML'], $result['keys']);
      if ($success) {
        $message = "Тест успешно сохранён!";
        $class = "success";
      } else {
        $message = "Внимание! При добавлении нового теста произошла ошибка! Попробуйте ещё раз или обратитесь к разработчику.";
        $class = "error";
      }
      $output =
        <<<MESSAGEBOX
<div class='message_box'>
<p class="$class">$message</p>
<button onclick="window.location.href='admin.php'">Вернуться</button>
</div>
MESSAGEBOX;
    } else // $result["status"] != "Success": произошла ошибка в ходе генерации, выводим сообщение и повторяем попытку
    {
      $status = $result["status"];
      $testIndex = $result["testIndex"];
      $keyIndex = $result["keyIndex"];
      $pageTitle = $status;
      $title = $_POST['Title'];
      $task = $_POST['Task'];
      $test = $_POST['Test'];
      $key = $_POST['KeyText'];

      $success = $db->updateTestFull($ID, $title,
        $result['resultHTML'], $result['keys'],
        $_POST['Test'], $_POST['KeyText'],
        false, $result['status'], false,
        $testIndex, $keyIndex
      );

      if (!$success) die("Unable to update database");

      if ($testIndex > 20)
        $testFragment = mb_substr($_POST['Test'], $testIndex - 20, 40);
      else
        $testFragment = mb_substr($_POST['Test'], -20);

      if ($keyIndex > 20)
        $keyFragment = mb_substr($_POST['KeyText'], $keyIndex - 20, 40);
      else
        $keyFragment = mb_substr($_POST['KeyText'], -20);
    }
  }
} // Load test from the database to edit and update
elseif (isset($_GET['ID'])) {
  $ID = $_GET['ID'];
  $testData = $db->getTheTest($ID);
  if (!$testData) die("Can't get the data from database");

  $status = $testData["Status"];
  $testIndex = $testData["LastTestIndex"];
  $keyIndex = $testData["LastKeyIndex"];
  $pageTitle = $status;
  $title = $testData['Title'];
  $task = $testData['Task'];
  $test = $testData['Test'];
  $key = $testData['KeyText'];

  if ($testData['IsCorrect'] == 0) {
    $statusClass = 'error';
    if ($testData['LastTestIndex'] < 20)
      $testFragment = mb_substr($testData['Test'], $testData['LastTestIndex']);
    else
      $testFragment = mb_substr($testData['Test'], -20);

    if ($testData['LastKeyIndex'] < 20)
      $keyFragment = mb_substr($testData['KeyText'], $testData['LastKeyIndex']);
    else
      $keyFragment = mb_substr($testData['KeyText'], -20);
  } else {
    $statusClass = 'correct';
    $testFragment = "";
    $keyFragment = "";
  }
} else {
  $output = <<<ERROR
<div class='message_box'>
<p class="error">Форма не предназначена для вызова без параметров.</p>
<button onclick="window.location.href='admin.php'">Вернуться</button>
</div>
ERROR;
}

if ($output == "") {
  $output = <<<OUTPUTFORM
<div class='input_form'>
<h1>Редактирование теста</h1>
    <div class="wrapper_hr">
        <div id="debug">
            <p>Status: <span class="$statusClass">$status</span></p>
            <p>Test: $testFragment</p>
            <p>Key: $keyFragment</p>
        </div>    
        <form method="post" action="edit.php">
            <input name="ID" type="hidden" value="$ID">
            <input name="status" type="hidden" value="$status">
            <input name="testIndex" id="testIndex" type="hidden" value="$testIndex">
            <input name="keyIndex" id="keyIndex" type="hidden" value="$keyIndex">
            <label>Заголовок теста:&nbsp
                <input type="text" name="Title" spellcheck="true" value="$title">
            </label>
            <label>Задание:&nbsp
                <textarea class="small_text" name="Task" rows="2" cols="70" spellcheck="true">$task</textarea>
            </label>
            <p>Тестовое задание:</p>
            <textarea class="big_text" name="Test" id="test" rows="6" cols="70" spellcheck="false">$test</textarea>
            <p>Ключ:</p>
            <textarea class="big_text" name="KeyText" id="keyText" rows="6" cols="70" spellcheck="true">$key</textarea>
            <button type="submit">Сохранить и проверить</button>
        </form>
    </div>
</div>
OUTPUTFORM;

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
    <script src="JS/edit.js"></script>
</head>
<body>
<?php echo $output; ?>
</body>
</html>

