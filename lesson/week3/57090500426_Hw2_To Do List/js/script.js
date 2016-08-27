// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //เครื่องหมาย x
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to remove the current list item
var txtCheck = document.getElementsByClassName("btnCheck");
var $close = $('.close')

$close.click(function() {
  $(this).parent().empty().remove();
  checkMarked();
})

// Delete all marked button
$(".btnDelete").click(function(){
  $(".checked").remove();
  checkMarked();
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    checkMarked();
  }
}, false);

// Create a new list item when clicking on the "Add" button or Press an Enter key
var $addBtn = $('.addBtn')
var $input = $('.input-task')
var $content = $('.content')

$addBtn.click(function(){
  newElement();
})

function newElement() {
  if ($input.val() === '') {
    alert("You must write something!");
  } else {
    var temp = '<li>'+ $input.val() +'<span class="close">\u00D7</span></li>'
    $content.append(temp);
    //console.log($content,temp);
    checkMarked();
    var $close = $('.close')
      $close.click(function() {
        $(this).parent().empty().remove();
        checkMarked();
      })
  }
  document.getElementById("myInput").value = "";
}

//check all tasks
function checkAll(){
  var myNodelist = document.getElementsByTagName("LI");
  var word = txtCheck[0].innerHTML
  if (word == "Check all") {
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].classList.add('checked');
    }
  }else {
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].classList.remove('checked');
    }
  }
  checkMarked();
}

function checkMarked(){
  if (document.getElementsByClassName("checked").length == document.getElementsByTagName("LI").length &&
  document.getElementsByClassName("checked").length != 0) {
    txtCheck[0].innerHTML = "Uncheck all"
  }else if (document.getElementsByClassName("checked").length >= 0) {
    txtCheck[0].innerHTML = "Check all"
  }
}
