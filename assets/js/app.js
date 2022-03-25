
    var TopSlideItems=document.querySelectorAll(".TopCarousel_content");
    var TopSlideRight=document.querySelector('.TopCarousel_right');
    var TopSlideLeft=document.querySelector('.TopCarousel_left');
    var TopSlideDots=document.querySelectorAll('.carusel_dots li');
    var counter=0;
    TopSlideRight.addEventListener('click',RightTopSlide)
    TopSlideLeft.addEventListener('click',LeftTopSlide)
    function RightTopSlide(){
        for(var i=0;i<TopSlideItems.length;i++){
            TopSlideItems[i].classList.remove('TopCarousel_content_active');
            TopSlideDots[i].classList.remove('activeDot');
        }
        counter++;
        if(counter>TopSlideItems.length-1){
            counter=0
          
        }
        TopSlideItems[counter].classList.add('TopCarousel_content_active')

        for(var d=0;d<TopSlideDots.length;d++){
           
        }
        if(counter>TopSlideDots.length-1){
            counter=0
        }
        TopSlideDots[counter].classList.add("activeDot")
    }

    function LeftTopSlide(){
      
        for(var i=0;i<TopSlideItems.length;i++){
            TopSlideItems[i].classList.remove('TopCarousel_content_active');
            TopSlideDots[i].classList.remove('activeDot');
        }
        counter--;
        if(counter<TopSlideItems.length-1){
            counter=0
          
        }
        TopSlideItems[counter].classList.add('TopCarousel_content_active')

        for(var d=0;d<TopSlideDots.length;d++){
           
        }
        if(counter<TopSlideDots.length-1){
            counter=0
        }
        TopSlideDots[counter].classList.add("activeDot")
    }
    var iterval=setInterval(RightTopSlide,3000);
/** 
========================================================================================================
                                        END TOP CAROUSELL
========================================================================================================
**/
