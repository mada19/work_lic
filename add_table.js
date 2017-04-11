   function getFonts()
    {
        var nFontLen = dlgHelper.fonts.count;
        var rgFonts = new Array();
        for ( var i = 1; i < nFontLen + 1; i++ )
            rgFonts[i] = dlgHelper.fonts(i); 

        rgFonts.sort();
        for ( var j = 0; j < nFontLen; j++ )
            document.write( rgFonts[j] + "<BR>" );
    }
// function getFonts() {

//      // get list of fonts, and sort alphabetically
//      var allFonts = [];
//     for (var loop=1; loop<dlgHelper.fonts.count+1; loop++) 
//         allFonts[loop-1] = dlgHelper.fonts(loop);
//         allFonts.sort();

//     // create output list, and include samples of each font
//     var outputStr = '';
//     var fontTestString = 'ABC abc 123';
//     for (var loop=0; loop<allFonts.length; loop++) {
//     outputStr += 'Font name: ' + allFonts[loop] + ' Font example: ';
//     outputStr += '<span style="font-family: ' + allFonts[loop] + ';">' + fontTestString + '</span><br />\n';
//     }
//     document.getElementById('fontList').innerHTML = outputStr;
// }
   
//     