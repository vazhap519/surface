
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
var NewProductsCarousellRight=document.querySelector('.newProductsArrows_right');
var NewProductsCarousellLeft=document.querySelector('.newProductsArrows_left');
var newProductContentArea=document.querySelector('.newProductContentArea');
var newProductContentArea_childs=newProductContentArea.children;


NewProductsCarousellRight.addEventListener('click',function(){
    newProductContentArea.scrollLeft += 125;
})

NewProductsCarousellLeft.addEventListener('click',function(){
    newProductContentArea.scrollLeft -= 125;
})
const maxScroll=newProductContentArea.scrollWidth-newProductContentArea.clientWidth;
function Auto(){
    if(newProductContentArea.scrollWidth < (maxScroll-1)){
        newProductContentArea.scrollLeft -= 295;
    }else{
        newProductContentArea.scrollLeft += 1;
    }
}
let avtoPlay=setInterval(Auto,80);

for(var i=0;i<newProductContentArea_childs.length;i++){
    newProductContentArea_childs[i].addEventListener('mousedown',()=>{
        clearInterval(avtoPlay)
    });
    newProductContentArea_childs[i].addEventListener('mouseup',()=>{
        return setInterval(Auto,80)
    })
    

}
/** 
========================================================================================================
                                        END NEW CAROUSELL
========================================================================================================
**/