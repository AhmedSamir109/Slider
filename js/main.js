
/// <reference path="./typings/globals/jquery/index.d.ts" />


var container = document.querySelector('.container');
var imgs = document.querySelectorAll('.container img');
var fixedLayer = document.querySelector('.fixed-layer');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var closeBtn = document.querySelector('#close');

var innerImg = document.querySelector('.fixed-layer img');
var innerDiv = document.querySelector('.inner-div') 



var imgArray = Array.from(imgs) ;

var index = 0 ;

container.addEventListener('click',function(e){

    var clickedImg = e.target;

    index = imgArray.indexOf(clickedImg);

    // console.log(index)
    var imgSrc = clickedImg.getAttribute('src');

if(imgSrc != null){

    fixedLayer.classList.replace('d-none' , 'd-flex')
    innerImg.setAttribute('src' , imgSrc)
};

// console.log(imgSrc)
});





function closeUp(){
  fixedLayer.classList.replace('d-flex' , 'd-none')

}

closeBtn.addEventListener('click', closeUp)

fixedLayer.addEventListener('click', closeUp)




function nextImg(){
    index ++ ;

    if(index >= imgArray.length) {
        index = 0 ;
    }
        
    var nxtImg = imgArray[index];                //عشان نمسك الصورة اللي عليها الدور

    var srcAttr = nxtImg.getAttribute('src')      // عشان نجيب ال سورس  بتاعها


    innerImg.setAttribute('src' , srcAttr)
};


function prevImg(){
    index -- ;

    if(index == -1) {
        
        index = imgArray.length - 1 ;
    }
        
    var prevImg = imgArray[index];

    var srcAttr = prevImg.getAttribute('src')


    innerImg.setAttribute('src' , srcAttr)

};



next.addEventListener('click' , function(e){

    e.stopPropagation();
   
    nextImg();

})





prev.addEventListener('click' , function(e){

    e.stopPropagation();
   
    prevImg();

})



document.addEventListener('keydown' , function(e){

    if(fixedLayer.classList.contains('d-flex')){
    
        if (e.key == 'ArrowRight'){
            nextImg()
            console.log('x')
        }

        if(e.key == 'ArrowLeft'){
            prevImg()
            console.log('y')

        }

        if(e.key == 'Escape'){
            closeUp()
        }
}


})



//_________________________________________________________________________________________


$('.smallImg').on('click' , function(e){


    // let x = e.target ;
    // console.log(x)

  let imgSrc =  $(e.target).attr('src')
  console.log(imgSrc)

   $('.mainImg').attr('src' , imgSrc ) ;
})

