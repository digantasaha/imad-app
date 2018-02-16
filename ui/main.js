console.log('Loaded!');

//change the value of main-text div

var element=document.getElementById('main-text');

element.innerHTML='Something New!!!';
// move the image
var element1=document.getElementById('image');
var marginLeft =0;
function moveRight() {
    marginLeft=marginLeft + 1;
    element1.style.marginLeft=marginLeft +'px';
}
element1.onclick= function() {
    var interval=setInterval(moveRight,50);
  //image.style.marginLeft= '200px';  
};