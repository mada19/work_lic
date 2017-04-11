
function changeFontStyles(option) {
    var sel, range, node,html;
    var iframe = document.getElementById("textField");
    var win = iframe.contentWindow;
    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = win.getSelection().getRangeAt(0);
             switch(option){
              case 'font':
              var input = document.getElementById("font_list");
              var opt = input.options[input.selectedIndex].text;
              var html ='<span style="font-family:' + opt +'">' + range + '</span>';
              break;
              case 'size':
              var input = document.getElementById("font_size");
              var opt = input.options[input.selectedIndex].text;
              var html ='<span style="font-size:' + opt +'px">' + range + '</span>';
              break;
              case 'heading':
              var input = document.getElementById("headings");
              var opt = input.options[input.selectedIndex].text;
              var html ='<' + opt +'>' + range + '</'+opt+'>';
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
