MAX_POSITION = 1; // maximum valid position
const FIELDS = [];
FIELDS[0] = {type: "comma", key: 0, state: 0,};
FIELDS[1] = {type: "letter_ao", key: 'о', state: null,}; // выск_

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

// Here we process keys from keyboard
// ToDo: use the buttons also
const keyHandler = (ev) => {
    let p, currentField;
    switch (ev.key) {
        case ",":
        case "+":
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.type !== "comma") break;
            if (currentField.state !== 1) {
                $("#" + p).text(',');
                currentField.state = 1;
            }
            cursor.toRight();
            break;
        default:
            p = cursor.getPosition();
            currentField = FIELDS[p];
            if (currentField.state === '' && ev.key.length === 1) {
                $("#" + p).text(ev.key);
                currentField.state = ev.key;
            }
    }
    return false;
}

$(()=> {
    cursor = new Cursor(0);

    // key event handler
    $(document).on("keydown", keyHandler);
})


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
