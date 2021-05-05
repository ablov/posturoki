<!doctype html>
<html lang="ru">
<head>
  <title>Grammar test administrator login</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="CSS/admin.css" rel="stylesheet" type="text/css">
  <!-- jQuery  -->
  <script src="https://code.jquery.com/jquery-3.3.0.min.js"
          integrity="sha256-RTQy8VOmNlT6b2PIRur37p6JEBZUE7o8wPgMvu18MC4="
          crossorigin="anonymous"></script>
  <script src="JS/MD5.js"></script>
</head>
<body>
<form id="getPassword" class="message_box" action="admin.php" method="post" onsubmit="let pass = $('#password'); pass.val($.MD5(pass.val()))">
  <label>Введите пароль:
    <input type="password" name="password" id="password" required autofocus>
  </label>
  <input type="submit" value="Войти">
</form>
</body>
</html>