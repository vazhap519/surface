
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
var NewProductsmaxWidth=newProductContentArea.scrollWidth-newProductContentArea.clientWidth;
function NewProduct_R(){
    newProductContentArea.scrollLeft+=NewProductsmaxWidth;
}
function NewProduct_l(){
    newProductContentArea.scrollLeft-=NewProductsmaxWidth;
}
NewProductsCarousellRight.addEventListener('click',NewProduct_R);
NewProductsCarousellLeft.addEventListener('click',NewProduct_l);

function autosTartNewProducts(){
    if(newProductContentArea.scrollLeft>(NewProductsmaxWidth-1)){
        newProductContentArea.scrollLeft-=NewProductsmaxWidth;
    }else{
        newProductContentArea.scrollLeft+=1
    }
}
var NewProductAutoplay=setInterval(autosTartNewProducts,80)


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
    topProducts.scrollLeft+=topProductsSize
  
}
topProductsLeft.addEventListener('click',topProductsLetf_f)
function topProductsLetf_f(){
    topProducts.scrollLeft-=topProductsSize
}

function topProductsAuto(){
 if(topProducts.scrollLeft> (topProductsSize-1)){
    topProducts.scrollLeft-=topProductsSize
 }else{
    topProducts.scrollLeft+=1
 }
}
var topinterval=setInterval(topProductsAuto,80)
/** 
========================================================================================================
                                        END TOP PRODUCTS  CAROUSELL
========================================================================================================
**/



var SaleProtucts=document.querySelector('.saleProductsArea__content');
var SaleProtucts__left=document.querySelector('.saleProductsAreaTopArrows__left');
var SaleProtucts__Right=document.querySelector('.saleProductsAreaTopArrows__right');
var  SaleProtucts__Max=SaleProtucts.scrollWidth-SaleProtucts.clientWidth;
        function SaleProtucts_R(){
            SaleProtucts.scrollLeft += SaleProtucts__Max;
      
        }
        function SaleProtucts_L(){
            SaleProtucts.scrollLeft -= SaleProtucts__Max;
        }
        SaleProtucts__Right.addEventListener('click',SaleProtucts_R);
        SaleProtucts__left.addEventListener('click',SaleProtucts_L);
        setInterval(function(){
            if(SaleProtucts.scrollLeft>(SaleProtucts__Max-1)){
                SaleProtucts.scrollLeft-=SaleProtucts__Max
            }else{
                SaleProtucts.scrollLeft+=1
            }
        },80)


var brands=document.querySelector('.brandsArea');
var brendMax=brands.scrollWidth - brands.clientWidth;
            function autoBrends(){
                if(brands.scrollLeft>(brendMax-1)){
                    brands.scrollLeft-=brendMax;
                }else{
                    brands.scrollLeft+=1;
                }
            }
var AutoBrandsPlay=setInterval(autoBrends,80)

/** 
========================================================================================================
                                        END BRANDS  CAROUSELL
========================================================================================================
**/


var instagrammfeeds=document.querySelector('.instagram__Area_Carousell');
var instagrammfeedsMaxWidth=instagrammfeeds.scrollWidth-instagrammfeeds.scrollLeft;
function instagram_f(){
    if(instagrammfeeds.scrollLeft > instagrammfeedsMaxWidth){
        instagrammfeeds.scrollLeft-=instagrammfeedsMaxWidth;
    }else{
        instagrammfeeds.scrollLeft+=1;
    }
}
var instaAuto=setInterval(instagram_f,80)