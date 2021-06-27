function setCursorPosition(input, pos) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(pos, pos);
    } else if (input.createTextRange) {
        const range = input.createTextRange();
        range.collapse(true);
        if(pos < 0) {
            pos = input.val().length + pos;
        }
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

$(() => {
    setCursorPosition($('#keyText')[0], $('#keyIndex').val());
    const test = $('#test')[0]
    setCursorPosition(test, $('#testIndex').val());
    test.focus();
});