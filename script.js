var img1=document.querySelector('#one');
var img2=document.querySelector('#two');

var temp;

var btn=document.querySelector('button');

btn.addEventListener('click',function(){
    var src1=img1.src;
    var src2=img2.src;

    img2.src= src1;
    img1.src= src2;

})