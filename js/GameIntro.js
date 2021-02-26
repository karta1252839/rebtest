var cards = ["card0","card1","card2","card3","card4","card5"];
for (let i = 0; i < cards.length; i++) {
    $('.card_'+i+'').hover(function () {
        $(this).attr('src','../img/Featurespage/GameIntro/cards/card'+(i-1)+'.png');
    }, function(){
        $(this).attr('src', '../img/Featurespage/GameIntro/cards/card'+(i-1)+'off.png');
    })
}