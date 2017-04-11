var show = false;

function edit(){
	textField.document.designMode = 'On';

}


function source_code(){
 	if(show){
 		
 		textField.document.getElementsByTagName('body')[0].innerHTML = textField.document.getElementsByTagName('body')[0].textContent;
		show=false;
	}else{
		textField.document.getElementsByTagName('body')[0].textContent = textField.document.getElementsByTagName('body')[0].innerHTML;
		show = true;
 	}
}

function save(){
	   document.getElementById("textarea").value = window.frames['textField'].document.body.innerHTML;
     document.getElementById("form").target = "_blank";
	   document.getElementById("form").submit();
}


function insert_tag(option){
    var sel, range, node;
    var iframe = document.getElementById("textField");
    var win = iframe.contentWindow;
    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = win.getSelection().getRangeAt(0);
            switch(option){
              case 'span':
              var html = '<span>' + range + '</span>';
              break;
              case 'paragraph':
              var html = '<p>' + range + " "+'</p>';
              break;
              case 'br':
              var html = range +'<br>' ;
              break;
              case 'div':
              var html = '<div>' + range + '</div>';
              break;
              case 'space':
              var html = range + '&nbsp;';
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

