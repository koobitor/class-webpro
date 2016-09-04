$(document).ready(function(){
  var $bold = $('.bold-btn')
  var $italic = $('.italic-btn')
  var $container = $('.container')
  var $textArea = $('#text')
  var $fsize = $('.font-size')
  var $font = $('.font')
  var $fcolor = $('.font-color')
  var $search = $('.search-input')
  var $searchReplace = $('.search-replace')
  var $replace = $('.replace-input')
  var $replaceBtn = $('.replace-btn')

  $(function(){
    for (i=6;i<=50;i++){
      $fsize.append($('<option></option>').val(i).html(i))
    }
    $fsize.val('13')
  })

  function readFile(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();

      reader.onload = (function(theFile) {
          return function(e) {
            $textArea.val(e.target.result)
          };
      })(f);
      reader.readAsText(f);
    }
  }

  var mark = function() {
    var text = this.value
    $textArea.highlightTextarea('destroy')
    $textArea.highlightTextarea({
     words: [text],
     caseSensitive : false
    })
  };

  $search.on("input", mark);

  $replaceBtn.click(function(){
    var str = jQuery("textarea#text").val();
    var bef = $searchReplace.val()
    var af = $replace.val()
    var txt = str.replace(new RegExp(bef,"igm"),af)
    jQuery("textarea#text").val(txt)
  })

  $fsize.change(function(){
    var get = $(".font-size option:selected").text() + 'px';
    document.getElementById('text').style.fontSize = get
  })

  $font.change(function(){
    document.getElementById('text').style.fontFamily = this.value
  })

  $fcolor.change(function(){
    var get = $(".font-color option:selected").text();
    document.getElementById('text').style.color = get
  })

  $bold.toggle(function(){
    document.getElementById('text').style.fontWeight = 'bold'
  },function(){
    document.getElementById('text').style.fontWeight = 'normal'
  })

  $italic.toggle(function(){
    document.getElementById('text').style.fontStyle = 'italic'
  },function(){
    document.getElementById('text').style.fontStyle = 'normal'
  })

  $('.load').on('change',readFile)

  $(".save-btn").click( function() {
    var text = $textArea.val();
    var filename = $(".save-input").val()
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".txt");
  });

})
