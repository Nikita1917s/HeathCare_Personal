const menuIcon = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".menu__body")

menuIcon.addEventListener('click', function(){
    menuBody.classList.toggle('_active')
    console.log(11)
})