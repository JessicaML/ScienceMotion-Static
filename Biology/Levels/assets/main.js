    function makeCell() {
        var divsize = 50;
        var posx = (Math.random() * ($(".tissue-container").width() - divsize)).toFixed();
        var posy = (Math.random() * ($(".tissue-container").height() - divsize)).toFixed();
        $newCell = $("<div class='cell-clone'></div>").clone().css({
            'left': posx + 'px',
            'top': posy + 'px',
            
        });
 
        $newCell.appendTo('.tissue-container');
    }


    function multiplyCell(){
        for(var i = 0; i < 100; i++){
            setTimeout(function timer(){
                makeCell();
            }, i * 65); 
        }           
    }


setTimeout( multiplyCell, 11000 );

$(function(){
        $('.organ').prepend('<img src="assets/images/heartfinal_animated.svg" />').hide().delay(22000).queue(function(n) {
            $(this).show(); n();
        })
    });

$(function(){
    $('.organ-system').prepend('<img src="assets/images/organsystemfinalslow_animated.svg" />').hide().delay(26000).queue(function(n) {
        $(this).show(); n();
    })
});

