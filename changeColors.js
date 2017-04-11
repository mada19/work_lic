
function changeColor(col) {
    
    var input = document.getElementById("change_color").value;
    var sel, range, node,html;
    var iframe = document.getElementById("textField"); 
    var win = iframe.contentWindow;
    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = win.getSelection().getRangeAt(0);
             if(col == "text_color")
            {
            	var html ='<span style="color:' + input +'">' + range + '</span>';
            }else if(col == "shading") {
        		var html ='<span style="background-color:' + input +'">' + range + '</span>';
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



function changeBgColor() {
    var input = document.getElementById("change_color").value;
    var sel, range, node,html;
    var x = document.getElementById("textField");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)
      y = y.document;
    y.body.style.backgroundColor = input;
   
}