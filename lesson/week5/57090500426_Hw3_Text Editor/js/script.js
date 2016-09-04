var $bold = $('#bold')
var $italic = $('#italic')
var $underline = $('#underline')
var $txtZone = $('.txtZone')
var $size = $('.size')
var $family = $('.family')
var $search = $('#search')
var $replace = $('#replace')

$(document).ready(function(){
    $bold.click(function(){
      if ($txtZone.css("font-weight")=="bold") {
        $txtZone.css("font-weight","normal");
      }else {
        $txtZone.css("font-weight","bold");
      }
    })

    $italic.click(function() {
      if ($txtZone.css("font-style")=="italic") {
        $txtZone.css("font-style","normal");
      }else {
        $txtZone.css("font-style","italic");
      }
    })

    $underline.click(function(){
      if ($txtZone.css("text-decoration")=="underline") {
        $txtZone.css("text-decoration","none");
      }else {
        $txtZone.css("text-decoration","underline");
      }
    })

    $size.change(function(){
      $txtZone.css("font-size", $(this).val() + "px")
    })

    $family.change(function(){
      $txtZone.css("font-family", $(this).val())
    })

    var find ;
    var mainTxt ;

    $search.click(function () {
      find = document.getElementById('txtSearch').value;
      mainTxt = document.getElementById('txtZone').value.toLowerCase();
      //document.getElementById('show').innerHTML = mainTxt.search(find)
      if (mainTxt.search(find) == -1 || $('#txtSearch').val() == "") {
        alert("Cannot find the search word.");
        //document.getElementById('txtSearch').value = ""
      }
      else {
        searchWord(find);
      }
    })

    $replace.click(function() {
      find = document.getElementById('txtSearch').value;
      mainTxt = document.getElementById('txtZone').value.toLowerCase();
      if (mainTxt.search(find) == -1 || $('#txtSearch').val() == "") {
        //console.log("6666");
        alert("Cannot find the search word.");
      }else if ($('#txtReplace').val() == "") {
        alert("Cannot find the replace word.");
      }else {
        var txtArea = document.getElementById('txtZone').value;
        var val = $('#txtReplace').val();
        var res = txtArea.replace(find,val);
        document.getElementById('txtZone').value = res;
        searchWord(val);
      }
    })

    function searchWord(a) {
      mainTxt = document.getElementById('txtZone').value.toLowerCase();
      var start = mainTxt.search(a);
      var caretPos = start + a.length;
      document.getElementById('txtZone').setSelectionRange(start, caretPos);
    }

    // open file
    document.getElementById('btnOpen').onclick = function() {
      if ('FileReader' in window) {
        document.getElementById('exampleInputFile').click();
      } else {
        alert('Your browser does not support the HTML5 FileReader.');
      }
    };

    document.getElementById('exampleInputFile').onchange = function(event) {
      var fileToLoad = event.target.files[0];
      $('.title')[0].value = fileToLoad.name
      //console.log(fileToLoad);

      if (fileToLoad) {
        var reader = new FileReader();
        reader.onload = function(fileLoadedEvent) {
          var textFromFileLoaded = fileLoadedEvent.target.result;
          document.getElementById('txtZone').value = textFromFileLoaded;
        };
        reader.readAsText(fileToLoad, 'UTF-8');
      }

    };

    // Save file
    document.getElementById('btnSave').onclick = function() {
      if ('Blob' in window) {
        var fileName = prompt('Please enter file name to save (.txt,.csv,.xml)', $('.title').val());
        if (fileName) {
          var textToWrite = document.getElementById('txtZone').value.replace(/\n/g, '\r\n');
          var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

          if ('msSaveOrOpenBlob' in navigator) {
            navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
          } else {
            var downloadLink = document.createElement('a');
            downloadLink.download = fileName;
            downloadLink.innerHTML = 'Download File';
            if ('webkitURL' in window) {
              // Chrome allows the link to be clicked without actually adding it to the DOM.
              downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {
              // Firefox requires the link to be added to the DOM before it can be clicked.
              downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
              downloadLink.onclick = destroyClickedElement;
              downloadLink.style.display = 'none';
              document.body.appendChild(downloadLink);
            }

            downloadLink.click();
          }
        }
      } else {
        alert('Your browser does not support the HTML5 Blob.');
      }
    };

    function destroyClickedElement(event) {
      document.body.removeChild(event.target);
    }

    // Close file
    $('#btnClose').click(function() {
      //console.log("close");
      $txtZone[0].value = "";
      document.getElementById('exampleInputFile').value = "";
      $('.title')[0].value = "";
    })
})

    /*
    // Open file
    function readSingleFile(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        displayContents(contents);
      };
      reader.readAsText(file);
    }

    // where to display
    function displayContents(contents) {
      var element = document.getElementById('txtZone');
      element.innerHTML = contents;
    }

    // wait for Event
    document.getElementById('file-input')
      .addEventListener('change', readSingleFile, false);

    // End open file
    */

    /*  test enter
      $replace.keyup(function(e) {
      //console.log(55);
      if (e.keyCode == 13) {
        //console.log("6666");
      }
    })  */
