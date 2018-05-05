 $(function(){
    $('li[class^="type-"]').mouseover(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
      if(currentClass != 'empty'){
        $('.main > li').addClass('deactivate');
        $('.' + currentClass).removeClass('deactivate');
      }
    });

   $('li[class^="cat-"]').mouseover(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
        $('.main > li').addClass('deactivate');
        $('.' + currentClass).removeClass('deactivate');
    });

    $('.main > li').mouseout(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
       $('.main > li').removeClass('deactivate');
    });

});