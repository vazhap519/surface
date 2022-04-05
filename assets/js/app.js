
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
var newProductContentArea_childs=document.querySelector('.newProductContentArea').children;
var maxWidth=newProductContentArea.scrollWidth-newProductContentArea.clientWidth;
NewProductsCarousellRight.addEventListener('click',function(){
    newProductContentArea.scrollLeft += 125;
    if(newProductContentArea.scrollLeft>(maxWidth-1)){
        newProductContentArea-=125
    }

})
NewProductsCarousellLeft.addEventListener('click',function(){
    newProductContentArea.scrollLeft -= 125;
    if(newProductContentArea.scrollLeft<(maxWidth-1)){
        newProductContentArea+=125
    }
})
var npl=autoplayNew();
var autoplayNewp=setInterval("npl",3000);
function autoplayNew(){
    if(newProductContentArea.scrollWidth>(maxWidth-1)){
        newProductContentArea-=maxWidth;
    }else{
        newProductContentArea+=1;
    }
}

/** 
========================================================================================================
                                        END NEW CAROUSELL
========================================================================================================
**/

var topProducts=document.querySelector('.TopProductsArea__content');
var topProductsLeft=document.querySelector('.topProductsArrows__left');
var topProductsRight=document.querySelector('.topProductsArrows__right');
var topProductsBoxes=document.getElementsByClassName('.TopProductsArea__content__box');
var topProductsSize=topProducts.scrollWidth-topProducts.clientWidth;

topProductsRight.addEventListener('click',topProductsRight_f)
function topProductsRight_f(){
    topProducts.scrollLeft+=125
  
}
topProductsLeft.addEventListener('click',topProductsLetf_f)
function topProductsLetf_f(){
    topProducts.scrollLeft-=125
}

function topProductsAuto(){
 if(topProducts.scrollLeft> topProductsSize-1){
    topProducts.scrollLeft-=125
 }
}

/** 
========================================================================================================
                                        END TOP PRODUCTS  CAROUSELL
========================================================================================================
**/



var SaleProtucts=document.querySelector('.saleProductsArea__content'),
        SaleProtucts__left=document.querySelector('.saleProductsAreaTopArrows__left'),
        SaleProtucts__Right=document.querySelector('.saleProductsAreaTopArrows__right'),
        SaleProtucts__Max=SaleProtucts.scrollWidth-SaleProtucts.clientWidth;

        function SaleProtucts_R(){
            SaleProtucts.scrollLeft += 125;
      
        }
        function SaleProtucts_L(){
            SaleProtucts.scrollLeft -= 125;
        }
        SaleProtucts__Right.addEventListener('click',SaleProtucts_R),
        SaleProtucts__left.addEventListener('click',SaleProtucts_L);
        // setInterval(function(){
        //     if(SaleProtucts.scrollLeft>(SaleProtucts__Max-1)){
        //         SaleProtucts -=125;
        //     }else{
        //         SaleProtucts+=1
        //     }
        // },1000)

