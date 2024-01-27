
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const shadowContainer = document.querySelector('.navbar-shadow');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        shadowContainer.classList.toggle('navbar-shadow-active');
        burger.classList.toggle('burger-active');

        navLinks.forEach((link, index) =>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.5}s`
            }
        })
    })


}


navSlide();