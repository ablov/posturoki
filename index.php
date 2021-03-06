<!doctype html>
<html lang="ru">
<head>
  <title>Grammar tests example</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
        margin: 0;
        padding: 0;
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
        align-content: center;
        flex-flow: row wrap;
    }
    button {
        margin: 20px;
        height: 80px;
        width: 200px;
        font-family: "Comic Sans MS", fantasy;
        font-size: 24px;
    }
    h1 {
        margin: 70px;
        text-align: center;
    }
    @media only screen and (max-width: 500px) {
        .buttons {

        }
        button {
            height: unset;
            width: unset;
            min-width: 200px;
        }
    }

  </style>
</head>
<body>
<h1>Выберите вариант</h1>
<div class="buttons">
  <button onclick="window.location.href = window.location.href + '/1'">Вариант 1</button>
  <button onclick="window.location.href = window.location.href + '/2'">Вариант 2</button>
</div>
</body>
