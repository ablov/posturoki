(function ($, undefined) {
    $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }
})(jQuery);

(function ($, undefined) {
    $.fn.setCursorPosition = function (pos) {
        var el = $(this).get(0);
        if (el.setSelectionRange) {
            el.focus();
            el.setSelectionRange(pos, pos);
        } else if (el.createTextRange) {
            const range = el.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
})(jQuery);

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) return this.valueOf();
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

$(()=>{
    const textArea = $("#myText");
    const resultNode = $("#result");
    const keyText = resultNode.text();
    let cursorPosition = 0;
    textArea.trigger("focus");
    textArea.setCursorPosition(0);
    $("#check").on("click",() => {
        resultNode.html(check(textArea.val(), keyText)).show();
    })
})

function openTest(testID) {
    window.location.href = "test.php?TestID=" + testID;
    return false;
}

// Compare textArea with key and make html output with marked mistakes as <span class='mistake'>
function check(textArea, key) {
    const length = Math.min(textArea.length, key.length);
    let result = '';
    let i; // key index
    let j; // test index
    let char = ''; // symbol from test
    let keyChar = ''; // symbol from key
    for (i = 0, j = 0; (typeof (char = textArea[j]) !== 'undefined') && (typeof (keyChar = key[i]) !== 'undefined'); i++, j++) {
        if (char === '\n') result += "<br>";
        else if (char === keyChar) result += char;
        else { // check for mistakes
            // check '', '-', ' '
            switch (char) {
                case ' ':
                    if (keyChar === '-') {
                        result += '<span class="mistake">-</span>';
                    } else if (keyChar === ',') {
                        result += '<span class="mistake">,</span>';
                        --j;
                    } else {
                        result += '<span class="mistake">|</span>';
                        --i;
                    }
                    break;
                case '-':
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                    } else {
                        result += '<span class="mistake">|</span>';
                        --i;
                    }
                    break;
                case ',':
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                        ++j;
                    }
                    break;
                default:
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                        --j;
                    }
                    else if (keyChar === '-') {
                        result += '<span class="mistake">-</span>';
                        --j;
                    }
                    else {
                        result += '<span class="mistake">' + keyChar + '</span>';
                    }
            }
        }
    }
    return result;
}