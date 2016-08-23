$(document).ready(function(){
  console.log($(window))

  var $input = $('.task-input') //ใส่ $ เพื่อบอกว่าเป็นตัวแปรของ jquery แล้ว
  var $content = $('.content')
  var $delete = $('.delete')
  var $task = $('.task')
  var $btn = $('.btn')

  $delete.click(function Remove(){
    //console.log($(this),$(this).parent())
    $(this).parent().remove() //empty() content หาย - remove() tag หายด้วย
  })

  $input.keyup(function(e){
    //console.log($input.val())
    if(e.keyCode == 13)
    {
      var temp = '<li><input type="checkbox" class="check" /> ' + '<span class="task">' + $input.val() + '</span><span class="delete"> (x)</span></li>'
      $content.append(temp) //prepend วางบน - append วางล่าง
    }
  })

  $content.on('click','.delete',function(){
    $(this).parent().remove()
  })

  $content.on('change','.check',function(){
    if(this.checked){
      $(this).closest('li').find('.task').css("text-decoration", "line-through")
    }else{
      $(this).closest('li').find('.task').css("text-decoration", "none")
    }
  })

  $btn.click(function(){
    $("input[type=checkbox]:checked").each(function() {
        $(this).parent().remove()
    });
  });

  /*$input.change(function(){
    console.log($(this).val())
  })

  $input.keyup(function(){
    console.log('up',$(this).val())
  })

  $input.keydown(function(){
    console.log('down',$(this).val())
  })*/

  //console.log($content,temp)
})
