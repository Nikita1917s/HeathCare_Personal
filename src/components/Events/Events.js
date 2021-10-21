let exploreDoctorsBtn = document.querySelector('#explore__doctors-btn');
let exploreDoctorsBlock = document.querySelector('.section__doctors .doctors__list > ul');

exploreDoctorsBtn.addEventListener('click', () => {
    exploreDoctorsBlock.classList.toggle('fullyShown')
})
