function xr(id)
{
  return document.getElementById(id);
}

function changeColor()
{
  document.getElementById("ob").style.color = "#8FBC8F"  ;
  document.getElementById("conn").style.color = "#BDB76B" ;
  document.getElementById("fw").style.color = "#7FFF00" ;
  document.getElementById("sw").style.color = "#9932CC" ;
  document.getElementById("tsf").style.color = "#A52A2A" ;
  document.getElementById("tts").style.color = "#FF1493" ;
  document.getElementById("fsa").style.color = "#483D8B" ;
  document.getElementById("sfl").style.color = "#DC143C" ;
}

function changeSize()
{
  document.getElementById("ob").style.fontSize = "xx-small";
  document.getElementById("conn").style.fontSize = "xx-small";
  document.getElementById("fw").style.fontSize = "xx-small";
  document.getElementById("sw").style.fontSize = "xx-small";
  document.getElementById("tsf").style.fontSize = "xx-large";
  document.getElementById("tts").style.fontSize = "xx-large";
  document.getElementById("fsa").style.fontSize = "xx-large";
  document.getElementById("sfl").style.fontSize = "xx-large";
}

function changeFont()
{
  document.getElementById("ob").style.fontFamily = "Impact,Charcoal,serif";
  document.getElementById("conn").style.fontFamily = "Impact,Charcoal,serif";
  document.getElementById("fw").style.fontFamily = "Impact,Charcoal,serif";
  document.getElementById("sw").style.fontFamily = "Impact,Charcoal,serif";
  document.getElementById("tsf").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("tts").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("fsa").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("sfl").style.fontFamily = "Impact,Charcoal,sans-serif";
}

function search()
{
  var a = xr("dw1").value ;
  var b = xr("x1").value ;
  var c = "" ;
  for (var i=0;i<b.length;i++)
    {
    var d = b.substr(i,a.length)
    if (d.indexOf(a) > -1)
      c = c + "" + (d.indexOf(a) + i) ;
    }
    if (c!="")
    {
      alert(c) ;
    }
    else
    {
      alert("You must type anything!! to feature words") ;
    }
}

function replace()
{
  var a = xr("dw1").value ;
  var b = xr("x1").value ;
  var c = "" ;
  for (var i=0;i<b.length;i++)
    {
    var d = b.substr(i,a.length)
    if (d.indexOf(a) > -1)
    {
    c = c + xr("dw2").value ;
    i = i + a.length-1 ;
    }
    else
    c = c + b.charAt(i) ;
    }
    xr("x1").value = c ;
}

function save()
{
    var textToSave = document.getElementById("input").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("savename").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function load()
{
    var fileToLoad = document.getElementById("fileloading").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("input").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
