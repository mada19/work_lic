<?php

echo "Salvat cu succes!";
$myfile = fopen("file.html", "w") or die("Unable to open file!");
fwrite($myfile, "<html>\n <title> </title>\n <body>\n");
$data = $_POST['textarea'];
fwrite($myfile, htmlspecialchars_decode($data));
fwrite($myfile, "\n </body>\n</html>");

?>