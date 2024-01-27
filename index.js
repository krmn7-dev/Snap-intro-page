
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const shadowContainer = document.querySelector('.navbar-shadow');
    const navLinks = document.querySelectorAll('.nav-links li')

    const featuresDropdown = document.querySelector('.features-tab');
    const featuresOptions = document.querySelector('.options-features');
    const companyDropdown = document.querySelector('.company-tab');
    const companyOptions = document.querySelector('.options-company');


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

    featuresDropdown.addEventListener('click', () => {
        if (featuresDropdown.classList.contains('active')){
            featuresDropdown.classList.remove('active');
            featuresOptions.classList.remove('active')
        } else {
            featuresDropdown.classList.add('active')
            featuresOptions.classList.add('active')
        }
    })
    companyDropdown.addEventListener('click', () => {
        if (companyDropdown.classList.contains('active')){
            companyDropdown.classList.remove('active');
            companyOptions.classList.remove('active')
        } else {
            companyDropdown.classList.add('active')
            companyOptions.classList.add('active')
        }
    })


}


navSlide();