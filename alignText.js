
function getAlign(style) {
    var sel, range, node;
    var iframe = document.getElementById("textField");
    var win = iframe.contentWindow;
    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = win.getSelection().getRangeAt(0);
            switch(style){
              case 'left':
              var html = '<div style="text-align:left;">' + range + '</div>';
              break;
              case 'center':
              var html = '<div style="text-align:center;">' + range + '</div>';
              break;
              case 'right':
              var html = '<div style="text-align:right;">' + range + '</div>';
              break;
              case 'justify':
              var html = '<div style="text-align:justify;">' + range + '</div>';
              break;
            }

            range.deleteContents();
            
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
    }

}
