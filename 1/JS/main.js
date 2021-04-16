MAX_POSITION = 131; // maximum valid position
const FIELDS = [];
FIELDS[0] = {type: "none", key: null, state: null,}; // ...
FIELDS[1] = {type: "comma", key: 0, state: 0,}; // Далее
FIELDS[2] = {type: "comma", key: 0, state: 0,}; // царь
FIELDS[3] = {type: "comma", key: 0, state: 0,}; // отпустил
FIELDS[4] = {type: "comma", key: 0, state: 0,}; // Пушкина
FIELDS[5] = {type: "comma", key: 1, state: 0,}; // жестом
FIELDS[6] = {type: "comma", key: 0, state: 0,}; // и
FIELDS[7] = {type: "comma", key: 0, state: 0,}; // тот
FIELDS[8] = {type: "letter_ao", key: 'о', state: null,}; // выск_
FIELDS[9] = {type: "comma", key: 0, state: 0,}; // выскочил
FIELDS[10] = {type: "comma", key: 0, state: 0,};// из
FIELDS[11] = {type: "comma", key: 0, state: 0,}; // кабинета
FIELDS[12] = {type: "comma", key: 0, state: 0,}; // и
FIELDS[13] = {type: "comma", key: 0, state: 0,};  // легко
FIELDS[14] = {type: "letter_ei", key: 'е', state: null,}; // прол_
FIELDS[15] = {type: "comma", key: 0, state: 0,}; // пролетел
FIELDS[16] = {type: "comma", key: 0, state: 0,}; // по
FIELDS[17] = {type: "comma", key: 0, state: 0,}; // паркетам
FIELDS[18] = {type: "comma", key: 0, state: 0,}; // смежного
FIELDS[19] = {type: "comma", key: 1, state: 0,}; // зала
FIELDS[20] = {type: "comma", key: 0, state: 0,}; // чуть
FIELDS[21] = {type: "letter_ei", key: 'и', state: null,}; // к_
FIELDS[22] = {type: "comma", key: 0, state: 0,}; // к_внувши
FIELDS[23] = {type: "comma", key: 1, state: 0,}; // Дантесу
FIELDS[24] = {type: "comma", key: 0, state: 0,}; // дежурному
FIELDS[25] = {type: "comma", key: 0, state: 0,}; // Он
FIELDS[26] = {type: "comma", key: 0, state: 0,}; // чуть
FIELDS[27] = {type: "comma", key: 0, state: 0,}; // с
FIELDS[28] = {type: "comma", key: 0, state: 0,}; // ума
FIELDS[29] = {type: "letter_ei", key: 'е', state: null,}; //(не)
FIELDS[30] = {type: "space", key: ' ', state: null,}; // не св_ротил
FIELDS[31] = {type: "letter_ao", key: 'о', state: null}; // св_ротил
FIELDS[32] = {type: "comma", key: 0, state: 0,}; // своротил
FIELDS[33] = {type: "comma", key: 0, state: 0,}; // или
FIELDS[34] = {type: "letter_ei", key: 'е', state: null,}; // (не)
FIELDS[35] = {type: "space", key: ' ', state: null,}; // не сделался
FIELDS[36] = {type: "letter_ei", key: 'и', state: null,}; // пр_знаться
FIELDS[37] = {type: "letter_ao", key: 'о', state: null}; // од_лжил
FIELDS[38] = {type: "letter_n", key: 'н', state: null,}; // озабочен_о
FIELDS[39] = {type: "comma", key: 0, state: 0,}; // озабоченно
FIELDS[40] = {type: "comma", key: 0, state: 0,}; // подумал
FIELDS[41] = {type: "comma", key: 0, state: 0,}; // о
FIELDS[42] = {type: "comma", key: 0, state: 0,}; // своем
FIELDS[43] = {type: "comma", key: 0, state: 0,}; // ученике
FIELDS[44] = {type: "comma", key: 0, state: 0,}; // Чижиков
FIELDS[45] = {type: "comma", key: 0, state: 0,}; // и
FIELDS[46] = {type: "letter", key: 'я', state: null,}; // взгл_нул
FIELDS[47] = {type: "comma", key: 0, state: 0,}; // взглянул
FIELDS[48] = {type: "comma", key: 0, state: 0,}; // на
FIELDS[49] = {type: "comma", key: 0, state: 0,}; // Чтение
FIELDS[50] = {type: "comma", key: 0, state: 0,}; // повести
FIELDS[51] = {type: "comma", key: 0, state: 0,}; // заняло
FIELDS[52] = {type: "letter_ei", key: 'е', state: null,}; // (не)
FIELDS[53] = {type: "space", key: ' ', state: null,}; // не больше
FIELDS[54] = {type: "comma", key: 0, state: 0,}; // больше
FIELDS[55] = {type: "space", key: '', state: null,}; // (полу)часа
FIELDS[56] = {type: "comma", key: 1, state: 0,}; // Интересно
FIELDS[57] = {type: "comma", key: 0, state: 0,}; // сколько
FIELDS[58] = {type: "letter", key: 'и', state: null,}; // времен_
FIELDS[59] = {type: "comma", key: 0, state: 0,}; // времени
FIELDS[60] = {type: "letter_ey", key: 'я', state: null} // посв_тил
FIELDS[61] = {type: "comma", key: 0, state: 0,}; // посвятил
FIELDS[62] = {type: "comma", key: 0, state: 0,}; // работе
FIELDS[63] = {type: "letter_ei", key: 'е', state: null,}; // (Не)
FIELDS[64] = {type: "space", key: ' ', state: null,}; // Не исключен_о
FIELDS[65] = {type: "letter_n", key: '', state: null,}; // Не исключен|о
FIELDS[66] = {type: "comma", key: 1, state: 0,}; // Не исключено,
FIELDS[67] = {type: "comma", key: 0, state: 0,}; // что
FIELDS[68] = {type: "letter_ei", key: 'е', state: null,}; // н_
FIELDS[69] = {type: "space", key: ' ', state: null,}; // (не)одну
FIELDS[70] = {type: "comma", key: 0, state: 0,}; //  не одну
FIELDS[71] = {type: "comma", key: 0, state: 0,}; //  А
FIELDS[72] = {type: "comma", key: 1, state: 0,}; //  может
FIELDS[73] = {type: "letter_ei", key: 'е', state: null,}; // н_
FIELDS[74] = {type: "space", key: ' ', state: null,}; // (не)один
FIELDS[75] = {type: "comma", key: 0, state: 0,}; // не один
FIELDS[76] = {type: "comma", key: 0, state: 0,}; // урок
FIELDS[77] = {type: "letter", key: 'и', state: null,}; // физик_
FIELDS[78] = {type: "comma", key: 0, state: 0,}; // физики
FIELDS[79] = {type: "comma", key: 0, state: 0,}; // или
FIELDS[80] = {type: "letter", key: 'и', state: null,}; // математик_
FIELDS[81] = {type: "comma", key: 0, state: 0,}; // Да
FIELDS[82] = {type: "comma", key: 0, state: 0,}; // и
FIELDS[83] = {type: "comma", key: 0, state: 0,}; // как
FIELDS[84] = {type: "letter_ei", key: 'и', state: null,}; // подсч_таешь
FIELDS[85] = {type: "letter_", key: 'ь', state: null,}; // подсчитаеш_
FIELDS[86] = {type: "comma", key: 1, state: 0,}; // подсчитаешь
FIELDS[87] = {type: "comma", key: 0, state: 0,}; // сколько
FIELDS[88] = {type: "letter", key: 'и', state: null,}; // времен_
FIELDS[89] = {type: "comma", key: 0, state: 0,}; // времени
FIELDS[90] = {type: "comma", key: 0, state: 0,}; // работает
FIELDS[91] = {type: "comma", key: 0, state: 0,}; // автор
FIELDS[92] = {type: "comma", key: 0, state: 0,}; // над
FIELDS[93] = {type: "comma", key: 0, state: 0,}; // своим
FIELDS[94] = {type: "comma", key: 1, state: 0,}; // произведением
FIELDS[95] = {type: "letter_ei", key: 'и', state: null,}; // отразивш_м
FIELDS[96] = {type: "comma", key: 1, state: 0,}; // отразившим,
FIELDS[97] = {type: "comma", key: 0, state: 0,}; // может
FIELDS[98] = {type: "comma", key: 1, state: 0,}; // быть,
FIELDS[99] = {type: "comma", key: 0, state: 0,}; // настроение
FIELDS[100] = {type: "comma", key: 0, state: 0,}; // целого
FIELDS[101] = {type: "letter_ao", key: 'о', state: null,}  // пок_ления
FIELDS[102] = {type: "comma", key: 0, state: 0,}; // Кто
FIELDS[103] = {type: "comma", key: 1, state: 0,}; // знает,
FIELDS[104] = {type: "comma", key: 1, state: 0,}; // может,
FIELDS[105] = {type: "comma", key: 0, state: 0,}; // речь
FIELDS[106] = {type: "comma", key: 0, state: 0,}; // идет
FIELDS[107] = {type: "comma", key: 0, state: 0,}; // о
FIELDS[108] = {type: "letter", key: '', state: null} // буду_щем
FIELDS[109] = {type: "comma", key: 0, state: 0,}; // будущем
FIELDS[110] = {type: "letter_ei", key: 'и', state: null,} // гени_
FIELDS[111] = {type: "comma", key: 1, state: 0,}; // гении,
FIELDS[112] = {type: "comma", key: 0, state: 0,}; // который
FIELDS[113] = {type: "comma", key: 0, state: 0,}; // взял
FIELDS[114] = {type: "comma", key: 0, state: 0,}; // и
FIELDS[115] = {type: "comma", key: 0, state: 0,}; // позволил
FIELDS[116] = {type: "comma", key: 0, state: 0,}; // себе
FIELDS[117] = {type: "comma", key: 0, state: 0,}; // для
FIELDS[118] = {type: "letter_s", key: 'с', state: null,} // спрес_овки
FIELDS[119] = {type: "comma", key: 0, state: 0,}; // спрессовки
FIELDS[120] = {type: "comma", key: 0, state: 0,}; // сюжета
FIELDS[121] = {type: "letter_ei", key: 'е', state: null,}; // н_
FIELDS[122] = {type: "space", key: '', state: null,}; // (не)большие
FIELDS[123] = {type: "comma", key: 0, state: 0,}; // большие
FIELDS[124] = {type: "comma", key: 0, state: 0,}; // сдвиги
FIELDS[125] = {type: "comma", key: 0, state: 0,}; // во
FIELDS[126] = {type: "comma", key: 0, state: 0,}; // времени
FIELDS[127] = {type: "comma", key: 0, state: 0,}; // лет
FIELDS[128] = {type: "comma", key: 0, state: 0,}; // на
FIELDS[129] = {type: "comma", key: 0, state: 0,}; // сто
FIELDS[130] = {type: "comma", key: 0, state: 0,}; // или
FIELDS[131] = {type: "comma", key: 0, state: 0,}; // на
FIELDS[132] = {type: "comma", key: 0, state: 0,}; // Ведь
FIELDS[133] = {type: "comma", key: 0, state: 0,}; // нельзя
FIELDS[134] = {type: "comma", key: 0, state: 0,}; // же
FIELDS[135] = {type: "comma", key: 1, state: 0,}; // утверждать
FIELDS[136] = {type: "comma", key: 0, state: 0,}; // что
FIELDS[137] = {type: "letter_s", key: 'с', state: null,}; // рас_казан
FIELDS[138] = {type: "letter_n", key: 'н', state: null,}; // рассказан_ая
FIELDS[139] = {type: "comma", key: 0, state: 0,}; // рассказанная
FIELDS[140] = {type: "comma", key: 0, state: 0,}; // история
FIELDS[141] = {type: "comma", key: 0, state: 0,}; // полностью
FIELDS[142] = {type: "letter_n", key: '', state: null,}; // выдуман_а
FIELDS[143] = {type: "comma", key: 1, state: 0,}; // Может
FIELDS[144] = {type: "comma", key: 0, state: 0,}; // Федюшкин
FIELDS[145] = {type: "comma", key: 0, state: 0,}; // писатель
FIELDS[146] = {type: "letter", key: '', state: null,}; // буду_щего
FIELDS[147] = {type: "comma", key: 0, state: 0,}; // Ведь
FIELDS[148] = {type: "comma", key: 0, state: 0,}; // его
FIELDS[149] = {type: "letter_n", key: 'н', state: null,}; // современ_ики
FIELDS[150] = {type: "comma", key: 1, state: 0,}; // современники
FIELDS[151] = {type: "comma", key: 0, state: 0,}; // читатели
FIELDS[152] = {type: "letter_", key: 'ь', state: null,}; // трет_его
FIELDS[153] = {type: "comma", key: 0, state: 0,}; // третьего
FIELDS[154] = {type: "letter_ei", key: 'е', state: null,}; // тысяч_летия
FIELDS[155] = {type: "comma", key: 1, state: 0,}; // тысячелетия
FIELDS[156] = {type: "comma", key: 1, state: 0,}; // живущие
FIELDS[157] = {type: "comma", key: 0, state: 0,}; // в
FIELDS[158] = {type: "comma", key: 1, state: 0,}; // обществе
FIELDS[159] = {type: "letter_ei", key: 'е', state: null,}; // н_
FIELDS[160] = {type: "space", key: ' ', state: null,}; // (не)
FIELDS[161] = {type: "letter_ei", key: 'е', state: null,}; // хранящ_м
FIELDS[162] = {type: "comma", key: 0, state: 0,}; // хранящем
FIELDS[163] = {type: "comma", key: 1, state: 0,}; // традиции
FIELDS[164] = {type: "comma", key: 0, state: 0,}; // откроют
FIELDS[165] = {type: "comma", key: 0, state: 0,}; // повесть
FIELDS[166] = {type: "comma", key: 0, state: 0,}; // с
FIELDS[167] = {type: "space", key: ' ', state: null,}; // тем(же)
FIELDS[168] = {type: "comma", key: 0, state: 0,}; // тем же
FIELDS[169] = {type: "letter_eo", key: 'ё', state: null,}; // отреш_нным
FIELDS[170] = {type: "letter_n", key: 'н', state: null,}; // отрешён_ым
FIELDS[171] = {type: "comma", key: 0, state: 0,}; // отрешённым
FIELDS[172] = {type: "comma", key: 1, state: 0,}; // вниманием
FIELDS[173] = {type: "comma", key: 0, state: 0,}; // с каким
FIELDS[174] = {type: "comma", key: 0, state: 0,}; // мы
FIELDS[175] = {type: "letter_s", key: 'с', state: null,}; // рас_матриваем
FIELDS[176] = {type: "comma", key: 0, state: 0,}; // рассматриваем
FIELDS[177] = {type: "comma", key: 0, state: 0,}; // евангельские
FIELDS[178] = {type: "comma", key: 0, state: 0,}; // сюжеты
FIELDS[179] = {type: "comma", key: 0, state: 0,}; // мастеров
FIELDS[180] = {type: "letter_ao", key: 'о', state: null,}; // Возр_ждения

const BUTTONS = {
    none: [],
    comma: ['', ','],
    letter_ao: ['а', 'о'],
    letter_ei: ['е', 'и'],
    letter_ey: ['е', 'я'],
    letter_eo: ['ё', 'о'],
    letter_n: ['', 'н'],
    letter_s: ['', 'с'],
    letter_: [' ', 'ь', 'ъ'],
    letter: [],
    space: ['', '_', '-'],
}

class Cursor {
    constructor(pos = 0) {
        this.cursorPosition = pos;
        setCursorToPosition(this.cursorPosition);
    }

    toLeft() {
        removeCursorFromPosition(this.cursorPosition);
        cleanPlace();
        if (this.cursorPosition > 0) --this.cursorPosition;
        preparePlace();
        setCursorToPosition(this.cursorPosition);
    }

    toRight() {
        removeCursorFromPosition(this.cursorPosition);
        cleanPlace();
        if (this.cursorPosition < MAX_POSITION) ++this.cursorPosition;
        preparePlace();
        setCursorToPosition(this.cursorPosition);
    }

    getPosition() {
        return this.cursorPosition;
    }
}
let cursor;
let checkMode = false;

$(()=>{

    cursor = new Cursor(1);
    setButtons(1);

    // key event handler
    $(document).on("keydown", (ev) => {
        ev.stopPropagation();
        if (checkMode) {
            hideChecks();
            checkMode = false;
        }
        let p, currentField;
        switch (ev.key) {
            case "ArrowLeft":
                cursor.toLeft();
                break;
            case "ArrowRight":
                cursor.toRight();
                break;
            case ",":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "comma" && currentField.state !== 1) {
                    $("#" + p).text(',');
                    currentField.state = 1;
                }
                cursor.toRight();
                break;
            case " ":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "space" && currentField.state !== ' ') {
                    $("#" + p).text(' ');
                    $("#c" + p).remove();
                    currentField.state = ' ';
                }
                break;
            case "-":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "space" && currentField.state !== '-') {
                    $("#" + p).text('-');
                    $("#c" + p).remove();
                    currentField.state = '-';
                }
                break;
            case "Delete":
            case "Backspace":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "comma" && currentField.state === 1) {
                    $("#" + p).text('');
                    currentField.state = 0;
                } else if (currentField.type === "space" && currentField.state !== '') {
                    $("#" + p).text('');
                    $("#c" + p).remove();
                    currentField.state = '';
                } else if ((currentField.type === "letter_n" || currentField.type === "letter") && currentField.state !== '') {
                    $("#" + p).text('');
                    currentField.state = '';
                }
                break;
            case "н":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "letter_n" && currentField.state !== 'н') {
                    $("#" + p).text('н');
                    currentField.state = 'н';
                }
                break;
            case "с":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.type === "letter_s" && currentField.state !== 'с') {
                    $("#" + p).text('с');
                    currentField.state = 'с';
                }
                break;
            case "ь":
            case "ъ":
                p = cursor.getPosition();
                currentField = FIELDS[p];
                let key = ev.key;
                if (key === 'ь' || key === 'ъ') {
                    if (currentField.type === "letter_" && currentField.state !== key) {
                        $("#" + p).text(key);
                        currentField.state = key;
                    }
                }
                break;
            case "Enter": // Check
                checkGrammar();
                break;
            default:
                p = cursor.getPosition();
                currentField = FIELDS[p];
                if (currentField.state === '' && ev.key.length === 1) {
                    $("#" + p).text(ev.key);
                    currentField.state = ev.key;
                }
        }
        setButtons(cursor.getPosition());
    })
})

// Check the grammar and punctuation
function checkGrammar() {
    checkMode = true;
    let mistakes = 0;
    for (let i = 0; i < FIELDS.length; i++) {
        let field = FIELDS[i];
        if (field.state == null) continue;
        let fieldNode = $("#" + i);
        if (field.state === field.key) {
            switch (field.type) {
                case "letter_ao":
                case "letter_ei":
                case "letter_eo":
                case "letter_ey":
                case "letter":
                case "comma":
                    fieldNode.css({
                        'color': 'green',
                        'fontWeight': 'bold',
                    });
                    break;
                case "space":
                case "letter_n":
                case "letter_s":
                case "letter_":
                    let text;
                    if (field.state === '') text =  '|';
                    else if (field.state === ' ') text = '_';
                    else text = field.state;
                    fieldNode.css({
                        'color': 'green',
                        'fontWeight': 'bold',
                    }).text(text);
                    break;
            }
        } else {
            switch (field.type) {
                case "letter_ao":
                case "letter_ei":
                case "letter_eo":
                case "letter_ey":
                case "letter":
                    fieldNode.css({
                        'color': 'red',
                        'fontWeight': 'bold',
                    }).text(field.key);
                    ++mistakes;
                    break;
                case "comma":
                    fieldNode.css({
                        'color': 'red',
                        'fontWeight': 'bold',
                    }).text((field.key === 0) ? '_' : ',');
                    ++mistakes;
                    break;
                case "space":
                case "letter_n":
                case "letter_s":
                case "letter_":
                    let text;
                    if (field.key === '') text = '|';
                    else if (field.key === ' ') text = '_';
                    else text = field.key;
                    fieldNode.css({
                        'color': 'red',
                        'fontWeight': 'bold',
                    }).text(text);
                    ++mistakes;
                    break;
            }
        }
    }
    return mistakes;
}

// Hide checks
function hideChecks() {
    for (let i = 0; i < FIELDS.length; i++) {
        let field = FIELDS[i];
        if (field.state == null) continue;
        let fieldNode = $("#" + i);
        let text = "";
        switch (field.type) {
            case "comma":
                text = (field.state) ? ',' : '';
                break;
            default:
                text = field.state;
        }
        fieldNode.css({
            'color': '',
            'fontWeight': '',
        }).text(text);
    }
}

// shows the buttons corresponding to type of the current position n
function setButtons(n) {
    let buttons = BUTTONS[FIELDS[n].type];
    let buttonNode;
    let buttonsNode = $("#buttons");
    buttonsNode.html("");
    for (let i = 0; i < buttons.length; i++) {
        buttonNode = $("<button id='" + buttons[i] + "'>" + buttons[i] + "</button>");
        buttonsNode.append(buttonNode);
    }
}

// Clean html at current caret position before move
function cleanPlace() {
    let p = cursor.getPosition();
    let currentNode = $("#" + p);
    let inputNode = currentNode.children("input");
    let currentValue = '';
    switch (FIELDS[p].type) {
        case "letter_ao":
        case "letter_ei":
        case "letter_eo":
        case "letter_ey":
        case "letter_":
            currentValue = inputNode.val().toString();
            if (currentValue === "") currentValue = "_";
            inputNode.remove();
            currentNode.text(currentValue);
            FIELDS[p].state = (currentValue !== "_") ? currentValue : null;
            break;
        case "letter":
            if (inputNode.length !== 0) {
                currentValue = inputNode.val().toString();
                if (currentValue === "") currentValue = FIELDS[p].state;
                inputNode.remove();
            }
            if (currentValue !== null) currentNode.text(currentValue);
            else currentNode.text('_');
            FIELDS[p].state = currentValue;
            break;
    }
}

// Prepare html at current caret position
function preparePlace() {
    let p = cursor.getPosition();
    let fieldType = FIELDS[p].type;
    let currentNode = $("#" + p);
    switch (fieldType) {
        case "letter_ao":
        case "letter_ei":
        case "letter_eo":
        case "letter_ey":
        case "letter":
            let currentValue = currentNode.text();
            if (currentValue === "_") currentValue = "";
            currentNode.text('');
            let editPlace = $("<input type='text' maxlength='1' minlength='1' placeholder='_' value='" + currentValue + "'>");
            currentNode.append(editPlace);
            editPlace.trigger("focus");
            break;
    }
}

// Set cursor at cursorPosition p
function setCursorToPosition(p) {
    $("#" + p).addClass("cursor");
}

// Clean cursor from position p
function removeCursorFromPosition(p) {
    $("#" + p).removeClass("cursor");
}
