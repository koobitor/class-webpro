$(document).ready(function(){
  console.log($(window))
  var $input = $('.task-input')
  var $content = $('.content')
//  var $btn = $('.btn-add')
  var $delete =$('.delete')
  var $task = $('.task')
  var $btn = $('.btn-delete')

  /*$btn.click(function(){
  console.log($input.val())
  var temp= '<li><input type="checkbox" class="check">' + $input.val() +'</li>'
  $content.append(temp)
})*/
$input.keypress(function(e) {
    if(e.which == 13) {
      console.log($input.val())
      var temp= '<li><input type="checkbox" class="check" />' + '<span class="task">'+ ' ' + $input.val() + '</span><span class="delete"> (x)</span></li>'
      $content.append(temp)
    }
});
$content.on('click','.delete',function(){
  $(this).parent().remove()
})

/*$("p").on("click", function(){
    alert("The paragraph was clicked.");
});*/

  $delete.click(function(){
    console.log($(this),$(this).parent)
    $(this).parent().remove()
  })

  $btn.click(function(){
    $("input[type=checkbox]:checked").each(function(){
      $(this).parent().remove();
    })
  });
  /*$input.change(function(){
  console.log($(this).val())
  })
  $input.keyup(function(){
    console.log($(this).val())
  })*/
})
