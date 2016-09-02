function xr(id)
{
  return document.getElementById(id);
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
