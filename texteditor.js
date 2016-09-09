var $bold = $('.btn-bold')
var $italic = $('.btn-italic')
var $fontlarge =$('.font-l')
var $textarea =$('.changeMe')
var $search = $('.search-input')

document.getElementById('btn-save').onclick = function() {
  if ('Blob' in window) {
    var fileName = prompt('Please enter file name to save', 'Untitled.txt');
    if (fileName) {
      var textToWrite = document.getElementById('mytextarea').value.replace(/\n/g, '\r\n');
      var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
      });

      if (!!window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
      } else {
        var downloadLink = document.createElement("a");
        downloadLink.download = fileName;
        downloadLink.innerHTML = "Download File";
        if ('webkitURL' in window) {
          // Chrome allows the link to be clicked without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
          // Firefox requires the link to be added to the DOM before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.onclick = destroyClickedElement;
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
        }

        downloadLink.click();
      }
    }
  } else {
    alert('Your browser does not support the HTML5 Blob.');
  }
};




var selectTextInInput = function (id, searchTerm) {
    var element = document.getElementById(id), value, startIndex;
    if(element && (value = element.value) && ((startIndex = value.indexOf(searchTerm)) >= 0)){
        if (typeof element.selectionStart == "number" && typeof element.selectionEnd == "number") {
            element.selectionStart = startIndex;
            element.selectionEnd = startIndex + searchTerm.length;
        } else if (typeof element.createTextRange != "undefined") {
            var range = element.createTextRange();
            range.findText(searchTerm);
            range.select();
        }
    }
};
document.getElementById('highlightSearchTerm').onclick = function(){
    var value = document.getElementById('searchTerm').value;
    selectTextInInput("mytextarea", value);
};


$fontlarge.click(function(){
    document.getElementById("mytextarea").style.fontSize = 'xx-large';
  })


$(function () {
                if (window.FileReader) {
                    $('.file').on('change', function (e) {
                        var file = e.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var csv = reader.result.split(',');
                            $('.changeMe').val(csv.join('\n'));
                        }
                        reader.readAsText(file);
                    });
                } else {
                    console.log("no support");
                }
            });


$bold.toggle(function(){
  document.getElementById("mytextarea").style.fontWeight = 'bold';
},function(){
  document.getElementById("mytextarea").style.fontWeight = 'normal';
}
)

$italic.toggle(function(){
  document.getElementById("mytextarea").style.fontStyle = 'italic';
},function(){
  document.getElementById("mytextarea").style.fontStyle = 'normal';
}
)
