$(document).ready(function(){
  console.log($(window))

  // Create a "delete" button for every row
  var newlist = document.getElementsByTagName("LI")
  for (var i = 0; i < newlist.length; i++) {
    var span = document.createElement("SPAN")
    var text = document.createTextNode("\u00D7")
    span.className = "delete"
    span.appendChild(text)
    newlist[i].appendChild(span)
  }

  // Delete
  var $delete = document.getElementsByClassName("delete")
  for (var i = 0; i < $delete.length; i++) {
    $delete[i].onclick = function() {
      var tab = this.parentElement
      tab.remove()
      //div.style.display = "none"
    }
  }

  // Add task to the list
  var add = $('.btnadd')
  add.click(function(){
    var li = document.createElement("li")
    var chk = document.createElement("input")
    chk.type = "checkbox"
    li.appendChild(chk)
    var inputValue = document.getElementById("task-input").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') { alert('There is nothing in the textbox. Please type something');}
    else { document.getElementById('UL').appendChild(li); }

    var span = document.createElement("SPAN")
    var t = document.createTextNode("\u00D7")
    span.className = "delete"
    span.appendChild(t)
    li.appendChild(span)

    for (i = 0; i < $delete.length; i++) {
      $delete[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "none"
      }
    }})



    //Clear complete
    var clear = $('.btn-clr')
    clear.click(function(){
      var textinputs = document.querySelectorAll('input[type=checkbox]')
      var empty = [].filter.call( textinputs, function( el ) {
           return el.checked
        })
    empty.parentElement.hide()
    })

})
