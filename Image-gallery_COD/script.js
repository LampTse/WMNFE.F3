'use strict'

let i = 0;
let time = 1000;
let timer;

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg'
    
]

function startSlideShow(){
    stopSlideShow();
    document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }
    else
    {
        i=0;
    }
    timer = setTimeout(startSlideShow, time);
}

function stopSlideShow(){
clearTimeout(timer);
}

function thumbsClick(x){
    stopSlideShow();
    document.slide.src = images[x];
}

function nextImage(){
    stopSlideShow();
   
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    document.slide.src = images[i];
}
function prevImage(){
    stopSlideShow();
    
    if(i>0){
        i--;
    }else{
        i = images.length-1;
    }
    document.slide.src = images[i];
}
window.onload = startSlideShow();