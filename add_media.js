function add_image(){
        var modal = document.getElementById('myModal');
        var win = document.getElementById("textField");
        var doc = win.contentDocument || iframe.contentWindow.document;
        var img= doc.createElement("img");
        img.setAttribute("src", document.getElementById('url').value);
        img.setAttribute("width", document.getElementById('width').value);
        img.setAttribute("height", document.getElementById('height').value);
        img.setAttribute("alt", document.getElementById('alt').value);

        doc.body.appendChild(img);    

            modal.style.display = "none";
}

function add_audio(){

        var win = document.getElementById("textField");
        var doc = win.contentDocument || iframe.contentWindow.document;
        var audio= doc.createElement("audio");
        audio.src= "images/song.mp3";
        audio.controls=true;
        doc.body.appendChild(audio);


}

function add_video(){

        var win = document.getElementById("textField");
        var doc = win.contentDocument || iframe.contentWindow.document;
        var video= doc.createElement("video");
        video.src= "images/video.mp4";
        video.height="150";
        video.width="150";
        video.controls=true;
        // audio.autoPlay = true;

        doc.body.appendChild(video);

}

function add_image_modal(){ 
  
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function() {
  modal.style.display = "none";

  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('form_img').reset();

}

function add_video_modal(){ 
  var modal = document.getElementById('video_modal');
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function() {
  modal.style.display = "none";
  }

}

// Browse for image in computer
document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
    document.getElementById('textField').style.img = "url(" + reader.result + ")";        
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    	//..
    }
}