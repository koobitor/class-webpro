$(document).ready(function(){
  console.log($(window))

  var $input = $('.task-input') //ใส่ $ เพื่อบอกว่าเป็นตัวแปรของ jquery แล้ว
  var $content = $('.content')
  var $delete = $('.delete')
  var $task = $('.task')
  var $btn = $('.btn')

  /*$delete.click(function Remove(){
    //console.log($(this),$(this).parent())
    $(this).parent().remove() //empty() content หาย - remove() tag หายด้วย
  })*/

  jQuery.fn.fadeOutAndRemove = function(speed){
    $(this).fadeOut(speed,function(){
        $(this).remove();
    })
  }

  $input.keyup(function(e){
    //console.log($input.val())
    if(e.keyCode == 13)
    {
      var temp = '<li><input type="checkbox" class="check" /> ' + '<span class="task">' + $input.val() + '</span><span class="delete"> [x]</span></li>'
      $content.append(temp) //prepend วางบน - append วางล่าง
      $input.val('');
    }
  })

  $content.on('click','.delete',function(){
    $(this).parent().fadeOutAndRemove(300);
  })

  $content.on('change','.check',function(){
    if(this.checked){
      $(this).closest('li').find('.task').css("text-decoration", "line-through")
      $(this).closest('li').find('.task').css("opacity", "0.5")
      $(this).closest('li').find('.task').css("transition", "opacity 0.3s ease-in-out")
    }else{
      $(this).closest('li').find('.task').css("text-decoration", "none")
      $(this).closest('li').find('.task').css("opacity", "1")
    }
  })

  $btn.click(function(){
    $("input[type=checkbox]:checked").each(function() {
      $(this).parent().fadeOutAndRemove(300);
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
