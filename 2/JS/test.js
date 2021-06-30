let FIELDS, MAX_POSITION;

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

// Here we process keys from keyboard
const keyHandler = (ev) => {
    if (checkMode) {
        hideChecks();
        checkMode = false;
    }
    const p = cursor.getPosition();
    const currentField = FIELDS[p];
    const node = $("#" + p);
    switch (ev.key) {
        case ",":
            if (currentField.type !== "comma") break;
            node.text(',');
            currentField.state = 1;
            cursor.toRight();
            break;
        case ":":
            if (currentField.type !== "comma") break;
            node.text(':');
            currentField.state = 3;
            cursor.toRight();
            break;
        case " ":
            if (currentField.type === "space" && currentField.state !== ' ') {
                node.text(' ');
                $("#c" + p).remove();
                currentField.state = ' ';
            }
            cursor.toRight();
            break;
        case "-":
            if (currentField.type === "space" && currentField.state !== '-') {
                node.text('-');
                $("#c" + p).remove();
                currentField.state = '-';
            }
            else if(currentField.type === "comma") {
                node.text(' —');
                currentField.state = 4;
            }
            cursor.toRight();
            break;
        default:
            if (currentField.type === "letter" && ev.key.length === 1) {
                node.text(ev.key);
                currentField.state = ev.key;
                cursor.toRight();
            }
    }
    return false;
}

const keyDownHandler = (ev) => {
    if (checkMode) {
        hideChecks();
        checkMode = false;
    }
    let p = cursor.getPosition();
    let currentField = FIELDS[p];
    switch (ev.key) {
        case "ArrowLeft":
            if (currentField.type === "comma" && currentField.state === null) currentField.state = 0;
            cursor.toLeft();
            return false;
        case "ArrowRight":
            if (currentField.type === "comma" && currentField.state === null) currentField.state = 0;
            cursor.toRight();
            return false;
        case "Delete":
        case "Backspace":
            if (currentField.type === "comma") {
                $("#" + p).text('');
                currentField.state = 0;
            } else if (currentField.type === "space" && currentField.state !== '') {
                $("#" + p).text('');
                $("#c" + p).remove();
                currentField.state = '';
            } else if (currentField.type === "letter" && currentField.state !== '') {
                $("#" + p).text('');
                currentField.state = '';
            } else {
                $("#" + p).text(' ');
                currentField.state = null;
            }
            return false;
        case "Enter":
            checkHandler();
            return false;
    }
    return true;
}

const checkHandler = () => {
    const errors = checkGrammar();
    const result = $("#result");
    if (errors["spell"]+errors["punctuation"] === 0) {
        result.html("<p class='greetings'>Поздравляем, ошибок нет!</p>" +
        "<p>Нажмите любую клавишу для продолжения</p>")
            .removeClass("hidden");
    }
    else {
        let sClass = "", pClass = "";
        if (errors["spell"] !== 0) sClass = " class='mistake'";
        if (errors["punctuation"] !== 0) pClass = " class='mistake'";
        result.html("<p" + sClass + ">Орфографических ошибок: " + errors["spell"] + "</p>" +
        "<p" + pClass + ">Пунктуационных ошибок: " + errors["punctuation"] + "</p>" +
        "<p>Нажмите любую клавишу для продолжения.</p>")
            .removeClass("hidden");
    }
}

$(()=> {
    FIELDS = Object.values(JSON.parse($('#keys').text()));
    MAX_POSITION = FIELDS.length - 1; // maximum valid position

    cursor = new Cursor(1);

    // key event handler
    $(document).on("keypress", keyHandler);
    $(document).on("keydown", keyDownHandler);
    $("#check").on("click", checkHandler);
});

// Check the grammar and punctuation
function checkGrammar() {
    checkMode = true;
    removeCursorFromPosition(cursor.getPosition());
    let mistakes = {'spell': 0, 'punctuation': 0};
    for (let i = 0; i < FIELDS.length; i++) {
        let field = FIELDS[i];
        if (field.state == null) continue;
        let fieldNode = $("#" + i);
        if (field.state === field.key) {
            if (field.type === "comma" || (field.type === "letter" && field.key !== '')) {
                fieldNode.css({
                    'color': 'green',
                    'fontWeight': 'bold',
                });
            }
            else {
                let text;
                if (field.state === '') text =  '|';
                else if (field.state === ' ') text = '_';
                else text = field.state;
                fieldNode.css({
                    'color': 'green',
                    'fontWeight': 'bold',
                }).text(text);
            }
        } else {
            if (field.type === "comma") {
                if (field.key === 2 && (field.state === 0 || field.state === 1)) {
                    fieldNode.css({
                        'color': 'green',
                        'fontWeight': 'bold',
                    });
                } else
                {
                    const symbol = ['_', ',', ' ', ':', ' -'];
                    fieldNode.css({
                        'color': 'red',
                        'fontWeight': 'bold',
                    }).text(symbol[field.key]);
                    mistakes["punctuation"]++;
                }
            } else {
                let text;
                if (field.key === '') text = '|';
                else if (field.key === ' ') text = '_';
                else text = field.key;
                fieldNode.css({
                    'color': 'red',
                    'fontWeight': 'bold',
                }).text(text);
                mistakes["spell"]++;
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
    $("#result").html("").addClass("hidden");
    setCursorToPosition(cursor.getPosition());
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
            if (inputNode.length === 0) break;
            currentValue = inputNode.val().toString();
            if (currentValue === "") currentValue = "_";
            inputNode.remove();
            currentNode.text(currentValue);
            FIELDS[p].state = (currentValue !== "_") ? currentValue : null;
            break;
        case "letter": // any symbol or nothing at all
            if (inputNode.length !== 0) {
                currentValue = inputNode.val().toString();
                if (currentValue === "") currentValue = FIELDS[p].state;
                inputNode.remove();
            }
            if (currentValue !== '') {
                if (currentValue !== null) currentNode.text(currentValue);
                else currentNode.text('_');
                FIELDS[p].state = currentValue;
            }
            break;
    }
}

// Prepare html at current caret position
function preparePlace() {
    let p = cursor.getPosition();
    let fieldType = FIELDS[p].type;
    let currentNode = $("#" + p);
    switch (fieldType) {
        case "letter":
            let currentValue = currentNode.text();
            if (currentValue === "_") currentValue = "";
            currentNode.text('');
            let editPlace = $("<input type='test' style='font-size: 1em; font-family: monospace; width: 0.6em; border: none;' maxlength='2' minlength='2' placeholder='_' value='" + currentValue + "'>");
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
