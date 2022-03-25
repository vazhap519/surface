
    var TopSlideItems=document.querySelectorAll(".TopCarousel_content");
    var TopSlideRight=document.querySelector('.TopCarousel_right');
    var TopSlideLeft=document.querySelector('.TopCarousel_left');
    var TopSlideDots=document.querySelectorAll('.carusel_dots li');
    var counter=0;

 function carousellLoop(){
    for(var i=0;i<TopSlideItems.length;i++){
        TopSlideItems[i].classList.remove("TopCarousel_content_active")
        for(var a=0;a<TopSlideDots.length;a++){
            TopSlideDots[a].style.backgroundColor="red";
        }
    }

 }
 carousellLoop()