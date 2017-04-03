javascript:

(function(){
    var Url = 'https://www.google.com/?gws_rd=ssl#safe=active&q=';
    var text, p;
    try { p = (location.pathname.slice(-3)).toLowerCase(); }
    catch(err) { p = ''; }
    if (p == 'asp' || p == 'spx') {
        text = document.selection.createRange().text;
    }
    else {
        text = window.getSelection().toString();
    }
    if ((document.activeElement.nodeName).toUpperCase() == 'INPUT') {
        text = getInput();
    }
    if (!text || text == '') {
        Url = 'https://www.google.com/';window.open(Url, "_blank");
    }
    else {
        text = checkSpaces(text);
        Url = Url + text;
        void(window.open(Url, "_blank"));
    }

function checkSpaces(textLocal) {
    var tempText = '';
    for (var i = 0; i < textLocal.length; i++) {
        if (textLocal.slice(i, i + 1) == ' ') {
        tempText = tempText + '+';
        }
        else if (textLocal.slice(i, i + 1) == '&') {
            tempText = tempText + 'and';
        }
        else {
            tempText = tempText + textLocal.slice(i, i + 1);
        }
    }
    return tempText;
}

function getInput() {
    return document.activeElement.value.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd);
}

})();
