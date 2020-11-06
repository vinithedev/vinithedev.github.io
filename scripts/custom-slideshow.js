l = $('.h-items > li').length // 4
u = 100
max = l * u
end = max-u
sum = 0

// Style
$('.h-items').width(max + "%")
$('.h-items > li').width(u/l + "%")

// Animate
$(document).ready(function(){
  $(".next").click(function(){
    sum += -u;
    if(sum >= -end)
    $(".h-items").animate({marginLeft:sum+"%"},"fast");
    else{
      sum = 0;
      $(".h-items").animate({marginLeft:sum+"%"},"fast");
    }
  });

  $(".prev").click(function(){
    if(sum == 0){
      sum = -end;
      $(".h-items").animate({marginLeft:sum+"%"},"fast");
    }
    else{
      sum += u;
      $(".h-items").animate({marginLeft:sum+"%"},"fast");
    }
  });
});