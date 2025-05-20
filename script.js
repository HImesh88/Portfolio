// Mobile menu
const menubtn = document.getElementById('menu-btn')
const menuitems = document.getElementById('menu-items')
menubtn.addEventListener('click', function () {
    menuitems.classList.toggle("hidden")
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        menuitems.classList.add("hidden")
    }
})

const closebtn = document.getElementById('close-btn')
closebtn.addEventListener('click', function () {
    menuitems.classList.add("hidden")
})

//Ball effects
var maincontainer= document.querySelector('.main-container')
var followball= document.getElementsByClassName('follow-ball')[0];
var blurball= document.getElementsByClassName('blur-ball')[0];

document.addEventListener('mousemove', function(dets){
    blurball.style.left=dets.x+"px"
    blurball.style.top=dets.y+"px"
    
})

maincontainer.addEventListener('mousemove' ,function(dets){
     followball.style.left= dets.x+"px";
     followball.style.top= dets.y+"px";
})

maincontainer.addEventListener('mouseleave' ,function(){
        followball.style.opacity= "0";
        followball.style.scale="0"
})

maincontainer.addEventListener('mouseenter', function(){
    followball.style.opacity="50%"
    followball.style.scale="1"
})

//image moving
var rightcont = document.getElementById('rightabt');
var avatar = document.getElementById('avatar-img') 
rightcont.addEventListener('mousemove', function(dets){
    avatar.style.transform=` rotateY(-${dets.clientY*0.3}deg)`
})

rightcont.addEventListener('mouseenter', function(){
    avatar.style.scale="1.19"
})

rightcont.addEventListener('mouseleave', function(){
    avatar.style.scale="1"
    avatar.style.transform=``
})

//
function director1(){
    location.href="https://letsrpc.vercel.app/"
}

function director2(){
    location.href="https://mountcareintl.com/conn"
}

function director3(){
    location.href="https://weatherapp-lac-nu.vercel.app/"
}

function director4(){
    location.href="https://randomnumgen-sooty.vercel.app/"
}

//loader
var loader = document.querySelector(".loader");
var loaderText = document.querySelector(".loader-text");

setTimeout(function() {
  let i = 100;

  // Fade out the text first
  let textInterval = setInterval(function() {
      loaderText.style.opacity = `${i}%`;
      i--;
      if (i < 0) clearInterval(textInterval);
  }, 5);

  // After text disappears, fade out the whole loader
  setTimeout(function() {
      let j = 100;
      let loaderInterval = setInterval(function() {
          loader.style.opacity = `${j}%`;
          j--;
          if (j < 0) clearInterval(loaderInterval);
      }, 10);
  }, 1000); // Delay after text fade-out
}, 1500); // Initial delay before the entire sequence starts



