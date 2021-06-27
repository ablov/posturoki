let FIELDS, MAX_POSITION;

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

// Here we process keys from keyboard
// ToDo: use the buttons also
const keyHandler = (ev) => {
    if (checkMode) {
        hideChecks();
        checkMode = false;
    }
    let p, currentField;
    switch (ev.key) {
        case ",":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type !== "comma") break;
            if (currentField.state === 0) {
                $("#" + p).text(',');
                currentField.state = 1;
            }
            cursor.toRight();
            break;
        case ":":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type !== "comma") break;
            if (currentField.state === 0) {
                $("#" + p).text(':');
                currentField.state = 3;
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
            cursor.toRight();
            break;
        case "-":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type === "space" && currentField.state !== '-') {
                $("#" + p).text('-');
                $("#c" + p).remove();
                currentField.state = '-';
            }
            else if(currentField.type === "comma" && currentField.state === 0) {
                $("#" + p).text(' —');
                currentField.state = 4;
            }
            cursor.toRight();
            break;
        case "н":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type === "letter_n" && currentField.state !== 'н') {
                $("#" + p).text('н');
                currentField.state = 'н';
            }
            cursor.toRight();
            break;
        case "с":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type === "letter_s" && currentField.state !== 'с') {
                $("#" + p).text('с');
                currentField.state = 'с';
            }
            cursor.toRight();
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
            cursor.toRight();
            break;
        case "Enter": // Check
            checkGrammar();
            break;
        default:
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if ((currentField.state === '' || currentField.state === null) && ev.key.length === 1) {
                $("#" + p).text(ev.key);
                currentField.state = ev.key;
                cursor.toRight();
            }
    }
    setButtons(cursor.getPosition());
    return false;
}

const keyDownHandler = (ev) => {
    if (checkMode) {
        hideChecks();
        checkMode = false;
    }
    switch (ev.key) {
        case "ArrowLeft":
            cursor.toLeft();
            return false;
        case "ArrowRight":
            cursor.toRight();
            return false;
        case "Delete":
        case "Backspace":
            let p = cursor.getPosition();
            let currentField = FIELDS[p];
            if (currentField.type === "comma") {
                $("#" + p).text('');
                currentField.state = 0;
            } else if (currentField.type === "space" && currentField.state !== '') {
                $("#" + p).text('');
                $("#c" + p).remove();
                currentField.state = '';
            } else if ((currentField.type === "letter_n" || currentField.type === "letter") && currentField.state !== '') {
                $("#" + p).text('');
                currentField.state = '';
            } else {
                $("#" + p).text(' ');
                currentField.state = null;
            }
            return false;
    }
    return true;
}

$(()=> {
    FIELDS = Object.values(JSON.parse($('#keys').text()));
    MAX_POSITION = FIELDS.length - 1; // maximum valid position

    cursor = new Cursor(1);
    setButtons(1);

    // key event handler
    $(document).on("keypress", keyHandler);
    $(document).on("keydown", keyDownHandler);
});

// Check the grammar and punctuation
function checkGrammar() {
    checkMode = true;
    removeCursorFromPosition(cursor.getPosition());
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
    setCursorToPosition(cursor.getPosition());
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
        case "letter_ao":
        case "letter_ei":
        case "letter_eo":
        case "letter_ey":
        case "letter":
            let currentValue = currentNode.text();
            if (currentValue === "_") currentValue = "";
            currentNode.text('');
            let editPlace = $("<input type='test' maxlength='2' minlength='2' placeholder='_' value='" + currentValue + "'>");
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
