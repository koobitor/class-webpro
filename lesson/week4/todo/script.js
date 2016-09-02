$(document).ready(function(){
  console.log($(window))

var $btnadd = $(".btn-add")
var $btndel = $(".btn-del")
var $input = $('.task-input')
var $content = $('.content')
var $delete = $('.delete')
var $task = $('.task')

$delete.click(function(){
  $(this).parent().empty().remove()
})

$btnadd.click(function(){
var temp = '<li><input class="check" type="checkbox" />' + '<span class="task">'
 +' '+ $input.val() + ' ' +'</span><span class="delete">(x)</span></li>'

$content.append(temp)
console.log($content,temp)

var $delete = $('.delete')
$delete.click(function(){
  $(this).parent().empty().remove()
})
 $input.val(' ')
})

$input.keydown(function(e){
    if(e.keyCode == 13)
    {
       var temp = '<li><input class="check" type="checkbox" />' + '<span class="task">'
       +' ' + $input.val() + ' ' +'</span><span class="delete">(x)</span></li>'

       $content.append(temp)
       console.log($content,temp)

       var $delete = $('.delete')
       $delete.click(function(){
         $(this).parent().empty().remove()
       })
       $input.val(' ')
    }
  })

$btndel.click(function(){
    $.each($("input[type=checkbox]:checked") , function() {
        $(this).parent().empty().remove()
      })
  })

})
