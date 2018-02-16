console.log('Loaded!');

//change the value of main-text div

var element=document.getElementById('main-text');

element.innerHTML='SOmething New!!!';
// move the image
var element1=document.getElementById('image');
element1.onclick= function() {
  image.style.marginLeft= '200px';  
};