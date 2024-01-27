
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const shadowContainer = document.querySelector('.navbar-shadow');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        shadowContainer.classList.toggle('navbar-shadow-active');
        burger.classList.toggle('burger-active');
    })


}


navSlide();