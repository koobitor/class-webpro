'use strict'
$(document).ready(function(){
console.log($(window))

var $btnadd = $('.btn-add')
//   $('form').submit(function () {
//     if ($('input').val() !== '') {
//         var input_value = $('input').val();
//         $('ul').append('<li class="list-group-item list-group-item-warning"><input type ="checkbox" class ="check"/>'+'<span style="margin-left:15px"></span> '+ input_value + '<a href=""><span class="pull-right"><button class="btn btn-xs btn-warning"><span class="glyphicon glyphicon-trash"></span></button></span></a></li><br>');
//     };
//     $('input').val('');
//     return false;
// });

$btnadd.click(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li class="list-group-item list-group-item-warning"><input type ="checkbox" class ="check"/>'+'<span style="margin-left:15px"></span> '+ input_value + '<a href=""><span class="pull-right"><button class="btn btn-xs btn-warning"><span class="glyphicon glyphicon-trash"></span></button></span></a></li><br>');
    };
    $('input').val('');
    return false;
});


$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

$("ul").on('click','.check', function () {
   $(this).parents("li").toggleClass("completed");
 });

});
