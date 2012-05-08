$(function(){
  $("#preso").bind("showoff:loaded", function (event) {
    console.log(event);

    $titles = $('.content > p.title');
    $titles.each(function(title){
      $t = $(this);
      parent = $t.closest('.slide').find('.headline:first');
      $t.prependTo(parent);
    });
  });
});
