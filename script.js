const menu = document.getElementsByClassName('icon')
const responav = document.getElementsByClassName('responav')
menu[0].addEventListener('click',function(){
    responav[0].classList.toggle('movemenu')
})

const pointer = document.getElementsByClassName('pointer')
document.addEventListener('mousemove',function(e){
    pointer[0].style.left = e.pageX + 'px'
    pointer[0].style.top = e.pageY + 'px'
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_pm3qohl",
        "template_j0wsjig",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }, (error) => {
        alert("Failed to send message. Try again.");
        console.log(error);
    });
});

