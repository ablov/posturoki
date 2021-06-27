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
<div id="result" class="hidden"></div>
</div>
</body>
</html>
BODY;

echo $output;
exit();

  /*
<body>
<!--<p>Cursor position: <span id="indicator"></span></p>-->
<div class="wrap">
    <h2>
        <ol>
            <li>Раскройте скобки и вставьте пропущенные буквы в слова, где это необходимо.</li>
            <li>Поставьте недостающие знаки препинания.</li>
        </ol>
        Для проверки нажмите "Ввод".
    </h2>
    <div id="myText">
        <p><span class="place" id="0"></span>Далее<span class="place" id="1"></span> царь<span class="place" id="2"></span>
            отпустил<span class="place" id="3"></span> Пушкина<span class="place" id="4"></span>
            жестом<span class="place" id="5"></span> и<span class="place" id="6"></span> тот<span class="place" id="7"></span>
            выск<span class="place" id="8">_</span>чил<span class="place" id="9"></span> из<span class="place" id="10"></span>
            кабинета<span class="place" id="11"></span> и<span class="place" id="12"></span> легко<span class="place" id="13"></span>
            прол<span class="place" id="14">_</span>тел<span class="place" id="15"></span> по<span class="place" id="16"></span>
            паркетам<span class="place" id="17"></span> смежного<span class="place" id="18"></span>
            зала<span class="place" id="19"></span> чуть<span class="place" id="20"></span>
            к<span class="place" id="21">_</span>внувши<span class="place" id="22"></span> Дантесу<span class="place" id="23"></span>
            дежурному<span class="place" id="24"></span> офицеру.</p>
        <p>«Он<span class="place" id="25"></span> чуть<span class="place" id="26"></span> с<span class="place" id="27"></span>
            ума<span class="place" id="28"></span>
            <span class="coplace" id="c30">(</span>н<span class="place" id="29">_</span><span class="place" id="30">)</span>св<span class="place" id="31">_</span>ротил<span class="place" id="32"></span>
            или<span class="place" id="33"></span>
            <span class="coplace" id="c35">(</span>н<span class="place" id="34">_</span><span class="place" id="35">)</span>сделался поэтом,
            пр<span class="place" id="36">_</span>знаться, то-то б од<span
            class="place" id="37">_</span>лжил!» - озабочен<span class="place" id="38">_</span>о<span class="place" id="39"></span>
            подумал<span class="place" id="40"></span> о<span class="place" id="41"></span> своем<span class="place" id="42"></span>
            ученике<span class="place" id="43"></span> Чижиков<span class="place" id="44"></span> и<span class="place" id="45"></span>
            взгл<span class="place" id="46">_</span>нул<span class="place" id="47"></span> на<span class="place" id="48"></span>
            часы. Чтение<span class="place" id="49"></span> повести<span class="place" id="50"></span>
            заняло<span class="place" id="51"></span>
            <span class="coplace" id="c53">(</span>н<span class="place" id="52">_</span><span class="place" id="53">)</span>больше<span class="place" id="54"></span>
            <span class="coplace" id="c55">(</span>полу<span class="place" id="55">)</span>часа. Интересно<span class="place" id="56"></span>
            сколько<span class="place" id="57"></span> времен<span class="place" id="58">_</span><span class="place" id="59"></span>
            посв<span class="place" id="60">_</span>тил<span class="place" id="61"></span> работе<span class="place" id="62"></span>
            сам автор? <span class="coplace" id="c64">(</span>Н<span class="place" id="63">_</span><span class="place" id="64">)</span>исключен<span
                    class="place" id="65">_</span>о<span class="place" id="66"></span> что<span class="place" id="67"></span>
            <span class="coplace" id="c69">(</span>н<span class="place" id="68">_</span><span class="place" id="69">)</span>одну<span class="place" id="70"></span>
            ночь. А<span class="place" id="71"></span> может<span class="place" id="72"></span>
            <span class="coplace" id="c74">(</span>н<span class="place" id="73">_</span><span class="place" id="74">)</span>один<span class="place" id="75"></span>
            урок<span class="place" id="76"></span> физик<span class="place" id="77">_</span><span class="place" id="78"></span>
            или<span class="place" id="79"></span> математик<span class="place" id="80">_</span>. Да<span class="place" id="81"></span>
            и<span class="place" id="82"></span> как<span class="place" id="83"></span>
            подсч<span class="place" id="84">_</span>таеш<span class="place" id="85">_</span><span class="place" id="86"></span>
            сколько<span class="place" id="87"></span> времен<span class="place" id="88">_</span><span class="place" id="89"></span>
            работает<span class="place" id="90"></span> автор<span class="place" id="91"></span> над<span class="place" id="92"></span>
            своим<span class="place" id="93"></span> произведением<span class="place" id="94"></span>
            отразивш<span class="place" id="95">_</span>м<span class="place" id="96"></span> может<span class="place" id="97"></span>
            быть<span class="place" id="98"></span> настроение<span class="place" id="99"></span> целого<span class="place" id="100"></span>
            пок<span class="place" id="101">_</span>ления? Кто<span class="place" id="102"></span> знает<span class="place" id="103"></span>
            может<span class="place" id="104"></span> речь<span class="place" id="105"></span> идет<span class="place" id="106"></span>
            о<span class="place" id="107"></span> буду<span class="place" id="108">_</span>щем<span class="place" id="109"></span>
            гени<span class="place" id="110">_</span><span class="place" id="111"></span> который<span class="place" id="112"></span>
            взял<span class="place" id="113"></span> и<span class="place" id="114"></span> позволил<span class="place" id="115"></span>
            себе<span class="place" id="116"></span> для<span class="place" id="117"></span>
            спрес<span class="place" id="118">_</span>овки<span class="place" id="119"></span>
            сюжета<span class="place" id="120"></span>
            <span class="coplace" id="c122">(</span>н<span class="place" id="121">_</span><span class="place" id="122">)</span>большие<span class="place" id="123"></span>
            сдвиги<span class="place" id="124"></span> во<span class="place" id="125"></span> времени<span class="place" id="126"></span> -
            лет<span class="place" id="127"></span> на<span class="place" id="128"></span> сто<span class="place" id="129"></span>
            или<span class="place" id="130"></span> на<span class="place" id="131"></span> двести? Ведь<span class="place" id="132"></span>
            нельзя<span class="place" id="133"></span> же<span class="place" id="134"></span> утверждать<span class="place" id="135"></span>
            что<span class="place" id="136"></span>
            рас<span class="place" id="137">_</span>казан<span class="place" id="138">_</span>ая<span class="place" id="139"></span>
            история<span class="place" id="140"></span> полностью<span class="place" id="141"></span>
            выдуман<span class="place" id="142">_</span>а. Может<span class="place" id="143"></span> Федюшкин<span class="place" id="144"></span>
            - писатель<span class="place" id="145"></span> буду<span class="place" id="146">_</span>щего?
            Ведь<span class="place" id="147"></span> его<span class="place" id="148"></span>
            современ<span class="place" id="149">_</span>ики<span class="place" id="150"></span>
            читатели<span class="place" id="151"></span> трет<span class="place" id="152">_</span>его<span class="place" id="153"></span>
            тысяч<span class="place" id="154">_</span>летия<span class="place" id="155"></span> живущие<span class="place" id="156"></span>
            в<span class="place" id="157"></span>
            обществе<span class="place" id="158"></span>
            <span class="coplace" id="c160">(</span>н<span class="place" id="159">_</span><span class="place" id="160">)</span>хранящ<span class="place" id="161">_</span>м<span class="place" id="162"></span>
            традиции<span class="place" id="163"></span> откроют<span class="place" id="164"></span> повесть<span class="place" id="165"></span>
            с<span class="place" id="166"></span> тем<span class="place" id="167">(</span>же<span class="coplace" id="c167">)</span><span class="place" id="168"></span>
            отреш<span class="place" id="169">_</span>н<span class="place" id="170">_</span>ым<span class="place" id="171"></span>
            вниманием<span class="place" id="172"></span> с каким<span class="place" id="173"></span> мы<span class="place" id="174"></span>
            рас<span class="place" id="175">_</span>матриваем<span class="place" id="176"></span> евангельские<span class="place" id="177"></span>
            сюжеты<span class="place" id="178"></span> мастеров<span class="place" id="179"></span> Возр<span class="place" id="180">_</span>ждения.</p>
    </div>
    <div class="hidden">
    <div id="buttons"></div>
    <button id="check">Проверить</button>
    <div id="result"></div>
    </div>
</div>
</body>