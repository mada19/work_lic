
function getStyle(style) {
    var sel, range, node;
    var iframe = document.getElementById("textField");
    var win = iframe.contentWindow;
    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = win.getSelection().getRangeAt(0);
            if(style == "bold")
            {
            	var html = '<span style="font-weight:bold;">' + range + '</span>'
            }else if(style == "italic"){
        		var html = '<span style="font-style:italic;">' + range + '</span>'
            }else if(style=="underline") {
        		var html = '<span style="text-decoration:underline;">' + range + '</span>'
        	}else{
                var html = '<span style="text-decoration:line-through;">' + range + '</span>'

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
