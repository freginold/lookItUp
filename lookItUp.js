javascript:(function(){var text, p, Url;try { p = (location.pathname.slice(-3)).toLowerCase(); }catch(err) { p=''; }if (p == 'asp' || p == 'spx') { text = document.selection.createRange().text; }else { text = window.getSelection().toString(); }if ((document.activeElement.nodeName).toUpperCase() == 'INPUT') {  text = getInput();  }if (!text || text=='') { Url = 'https://www.google.com/';window.open(Url, "_blank"); }else {text = checkSpaces(text);Url = 'https://www.google.com/?gws_rd=ssl#safe=active&q=' + text;void(window.open(Url, "_blank"));}function checkSpaces(textLocal) {  var tempText = '';  for (var i = 0;i < textLocal.length;i++) {    if (textLocal[i] == ' ') {      tempText = tempText + '+';    }    else if (textLocal[i] == '&') {      tempText = tempText + 'and';    }    else {      tempText = tempText + textLocal[i];    }  }  return tempText;}function getInput() {  return document.activeElement.value.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd);}})();
