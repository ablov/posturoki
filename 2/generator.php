<?php
const FIELD_START = array("type" => 'none', "key" => null, "state" => null);
const FIELD_COMMA_0 = array("type" => 'comma', "key" => 0, "state" => 0);
const FIELD_COMMA_1 = array("type" => 'comma', "key" => 1, "state" => 0);
const FIELD_COMMA_2 = array("type" => 'comma', "key" => 2, "state" => 0);
const FIELD_COLON = array("type" => 'comma', "key" => 3, "state" => 0);
const FIELD_LETTER = array("type" => 'letter', "key" => '', "state" => null);
const FIELD_SPACE =  array("type" => 'space', "key" => '', "state" => null);

$test = "Чаща была большая чёрная лохматая. Долго об_жат_ся она (н_)умела (по)этому пр_легла у ног Черничкиной пол_жила гр_мадную голову на вытянутые лапы а серые глаза пр_крыла так что они пр_вр_тились в узенькие щ_лочки. Чаща рас_читывала что так она произведёт хорошее впеч_тление и будет казат_ся самой добродушной собакой на свете. Её рас_чёты оправдались полностью: Черничкина накл_нилась и погладила её по голове. Вот только книжка выск_льзнула из набитого рю_зачка и упала раскрывш_сь на шес_надцатой странице. Чаща тут(же) уселась и с увлечением стала читать прямо с того места где пр_старелая Акка предводительница гусей думает брать ли ей Нильса в птич_ю стаю. Она гл_тала страницу за страниц_й и (н_)успокоилась до тех пор пока (н_)проч_тала как Акка прим_рила гусей и дала Нильсу пр_станище. Что было делать Черничкиной-младшей? (Н_)отрывать же собаку от чтения! Черничкина была хорошо воспита_а и привыкла сочу_ствен_о относит_ся к чужим увл_чениям.\n
— Давай снов_ увидимся! — обн_мая на прощанье Чащу, говорила Черничкина.\n
— Ты свис_ни, тебя (н_)заставлю я ждать, — отвечала рас_трога_н_ая Чаща мощ_ной лапой помогая запихнуть книгу в рюкзач_к.\n
И тут молния (с)боку рюкзачка от напр_жения ра_стегнулась и (от)туда с глухим стуком выпал любимец Черничкиной. Это был (н_)кто иной как старый китаец Жи Ши.";

$keyText = "Чаща была большая, чёрная, лохматая. Долго обижаться она не умела, поэтому прилегла у ног Черничкиной, положила громадную голову на вытянутые лапы, а серые глаза прикрыла так, что они превратились в узенькие щёлочки. Чаща рассчитывала, что так она произведёт хорошее впечатление и будет казаться самой добродушной собакой на свете. Её расчёты оправдались полностью: Черничкина наклонилась и погладила её по голове. Вот только книжка выскользнула из набитого рюкзачка и упала, раскрывшись на шестнадцатой странице. Чаща тут же уселась и с увлечением стала читать прямо с того места, где престарелая Акка, предводительница гусей, думает, брать ли ей Нильса в птичью стаю. Она глотала страницу за страницей и не успокоилась до тех пор, пока не прочитала, как Акка примирила гусей и дала Нильсу пристанище. Что было делать Черничкиной-младшей? Не отрывать же собаку от чтения! Черничкина была хорошо воспитана и привыкла сочувственно относиться к чужим увлечениям.\n
— Давай снова увидимся! — обнимая на прощанье Чащу, говорила Черничкина.\n
— Ты свистни, тебя не заставлю я ждать, — отвечала растроганная Чаща, мощной лапой помогая запихнуть книгу в рюкзачок.\n
И тут молния сбоку рюкзачка от напряжения расстегнулась и оттуда с глухим стуком выпал любимец Черничкиной. Это был не кто иной, как старый китаец Жи Ши.";

$result = prepareTest($test, $keyText);
print $result["resultHTML"];

function prepareTest(string $test, string $keyText) : array
{
  $testIndex = 0;
  $keyTextIndex = 0;
  $fieldIndex = 0;

  $FIELDS[$fieldIndex] = FIELD_START; // Start point
  $resultHTML = "<p><span class=\"place\" id=\"$fieldIndex\"></span>";
  $fieldIndex++;

  $preChar = ''; // Для анализа предыдущего символа
  $preIndex = 0; // Для сохранения индекса открывающей скобки
  $isPrefix = null; // Флаг для поля слитно/раздельно/дефис. True - если это префикс, false - если постфикс

  for(;;) {
    $testChar = mb_substr($test, $testIndex, 1);
    $keyChar = mb_substr($keyText, $keyTextIndex, 1);

    // Сначала проверяем, если и тест, и ключ не закончились
    if ($testChar != '' && $keyChar != '') {
      // Символы совпали...
      if ($testChar == $keyChar) {
        switch ($testChar) {
          // знаки препинания - за ними будет пробел
          case '.':
          case ',':
          case ':':
          case '-':
          case '—':
            $preChar = $testChar;
            $resultHTML .= $testChar;
            break;

          // если пробел - проверяем не было ли перед ним знака препинания
          case ' ':
            // если нет, ставим поле под запятую
            if ($preChar == '') {
              $FIELDS[$fieldIndex] = FIELD_COMMA_0;
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\"></span> ";
              $fieldIndex++;
            }
            // Если была - просто ставим пробел и сбрасываем флаг
            else {
              $resultHTML .= $testChar;
              $preChar = '';
            }
            break;
          // в остальных случаях просто добавляем символ в результат
          default:
            $resultHTML .= $testChar;
        }
      }
      // Символы не совпали - тут самый длинный кусок...
      else {
        switch ($testChar) {
          // знак препинания
          case ' ':
            if ($keyChar == ',') {
              $FIELDS[$fieldIndex] = FIELD_COMMA_1;
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\"></span> ";
              $fieldIndex++;
              $keyTextIndex++;
            }
            elseif ($keyChar == '(') { // опциональная запятая?
              if (mb_substr($keyText, $keyTextIndex+1, 2) == ",)") {
                $FIELDS[$fieldIndex] = FIELD_COMMA_2;
                $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\"></span> ";
                $fieldIndex++;
                $keyTextIndex += 3;
              }
              else { // что-то непонятное в скобках?
                die("Unknown case near key: '" . mb_substr($keyText, $keyTextIndex, 10) . "'");
              }
            }
            elseif ($keyChar == ':') { // двоеточие
              $FIELDS[$fieldIndex] = FIELD_COLON;
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\"></span> ";
              $fieldIndex++;
            }
            else { // что-то непонятное
              die("Unknown test char: '" . mb_substr($keyText, $keyTextIndex, 10) . "'; testIndex=$testIndex; keyIndex=$keyTextIndex");
            }
            break;

          // вставить пропущенную букву или удалить, если случай двойной согласной
          case '_':
            // Сравниваем следующий символ, если совпал, значит надо вставить букву
            if (mb_substr($test, $testIndex+1, 1) == mb_substr($keyText, $keyTextIndex+1, 1) ||
            // ... проверка ещё одной ситуации, вида '(н_)' - тут тоже вставка буквы
              mb_substr($test, $testIndex+1, 1) == ')') {
              $FIELDS[$fieldIndex] = FIELD_LETTER;
              $FIELDS[$fieldIndex]['key'] = $keyChar;
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\">_</span>";
              $fieldIndex++;
            }
            // ...если нет - значит случай "одна или две одинаковые согласные"
            else {
              $FIELDS[$fieldIndex] = FIELD_LETTER;
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\">_</span>";
              $keyTextIndex--;
              $fieldIndex++;
            }
            break;
          // слитно-раздельно-дефис
          case '(':
            // Проверяем, если до скобки был пробел, значит это префикс
            if (mb_substr($test, $testIndex-1, 1) == ' ') {
              $resultHTML .= "<span class=\"coplace\" id=\"c$fieldIndex\">(</span>";
              $preIndex = $fieldIndex;
              $isPrefix = true;
              $fieldIndex++;
              $keyTextIndex--;
            }
            // ... если пробела нет, значит это постфикс
            else {
              $FIELDS[$fieldIndex] = FIELD_SPACE;
              // анализируем ключ - если на этом месте пробел или дефис, значит и ключ соответствующий
              if ($keyChar == ' ' || $keyChar == '-') {
                $FIELDS[$fieldIndex]["key"] = $keyChar;
              }
              // ...если нет - значит слитно
              else {
                $keyTextIndex--;
              }
              $resultHTML .= "<span class=\"place\" id=\"$fieldIndex\">(</span>";
              $preIndex = $fieldIndex;
              $isPrefix = false;
              $fieldIndex++;
            }
            break;

          // Слитно/раздельно/дефис - окончание
          case ')':
            // Префикс
            if ($isPrefix) {
              $FIELDS[$preIndex] = FIELD_SPACE;
              // анализируем ключ - если на этом месте пробел или дефис, значит и ключ соответствующий
              if ($keyChar == ' ' || $keyChar == '-') {
                $FIELDS[$preIndex]["key"] = $keyChar;
              }
              // ...если нет - значит слитно
              else {
                $keyTextIndex--;
              }
              $resultHTML .= "<span class=\"place\" id=\"$preIndex\">)</span>";
              $isPrefix = null;
              $preIndex = null;
            }

            // Постфикс
            else {
              $resultHTML .= "<span class=\"coplace\" id=\"c$preIndex\">)</span>";
              $keyTextIndex--;
              $isPrefix = null;
              $preIndex = null;
            }
            break;

          default:
            // Проверяем, если в ключе на этом месте стоит '-', значит тут должно быть тире, просто пропускаем в ключе два символа (тире и пробел за ним)
            // и "отодвигаем" тест назад, для повторной проверки символа с ключом
            if($keyChar == '-') {
              $keyTextIndex++;
              $testIndex--;
            }
            // иначе, скорей всего произошла рассинхронизация
            else {
              die("Synchronization error: testIndex = $testIndex; keyIndex = $keyTextIndex;");
            }
        }
      }
    }

    // Если тест оказался длинее ключа или ключ оказался длинее теста - допечатываем то, что осталось
    elseif ($testChar != '' || $keyChar != '') {
      $resultHTML .= ($testChar != '') ? $testChar: $keyChar;
    }

    // Работа закончена!
    else break;

    $testIndex++;
    $keyTextIndex++;
  }
  return array("resultHTML" => $resultHTML, "Fields" => $FIELDS);
}
