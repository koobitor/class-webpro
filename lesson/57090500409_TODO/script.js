$(document).ready(function(){
  console.log($(window))

  var $btnadd = $('.btn-add')
  var $btnclear = $('.btn-clear')
  var $input = $('.task-input')
  var $content = $('.content')
  var $delete = $('.delete')

  $delete.click(function(){
    //console.log($(this),$(this).parent())
    $(this).parent().remove()
  })

  $btnadd.click(function(){
    var temp ='<li><input class="check" type="checkbox"/>' + $input.val() + ' <span class="delete">(x)</span>'+ '</li>'
    $content.prepend(temp)

    var $delete = $('.delete')
    $delete.click(function(){
      $(this).parent().remove()
    })
  })

  $btnclear.click(function(){
    $.each($("input[type=checkbox]:checked"),function(){
        $(this).parent().remove()
      })
  })
  /*$(':checkbox').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().remove()
      console.log('Checked');
    } else {
      console.log('Unchecked');
    }
  });*/

  /*$input.change(function(){
    console.log($(this).val())
  }).keyup(function(){
    console.log('up',$(this).val())
  }).keydown(function(){
    console.log('down',$(this).val())
  })
  */

})
