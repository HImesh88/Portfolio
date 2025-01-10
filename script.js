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

//Text scrolling animation
