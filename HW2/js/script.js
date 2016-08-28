$(document).ready(function(){
  console.log($(window))

  var $input = $('.input')
  var $content = $('.content')
  var $btn = $('.btn')

function del(){
  $(this).parent().remove()
}

  $btn.click(function(){
     var temp ='<li><input type="checkbox" class="checkbox">'  + $input.val() + '</li>'
       $content.append(temp)
       $input.val('')
       $input.focus()
   })

function check(){
  if ($(this).is(':checked')){
    $(this).parent().css('text-decoration','line-through')
    $(this).parent().append('<button class="delete">delete</button>')
  } else {
    $(this).parent().css('text-decoration','none')
    $(this).parent().find('.delete').remove()
  }
}

$(function(){
  $(document).on('click','.delete', del);
  $(document).on('click','.checkbox', check);
  })


 })
