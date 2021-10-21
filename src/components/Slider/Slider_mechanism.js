let controls = document.querySelector('.services__slider ul');
let sliderContainer = document.querySelector('.slider--container ul');
let sliderParent = document.querySelector('.container');
let containerWidth = sliderParent.clientWidth;
let active = 0;
let widthSlides = 0;
let totalWidth = 0;
let fullWidth = 0;
let sliderTimer, slides, dots, countSlides, oneSlider;
// 1000 (300) 1000 -300*3 = 100 /3

//Get Slider items after loading
let sliderItemsExist = setInterval(() => {
    oneSlider = document.querySelectorAll('.services__list ul li')

    //Stop interval
    if (oneSlider.length > 0) {
        clearInterval(sliderItemsExist),
            imageCreation(oneSlider),

            //Get variable items
            slides = document.querySelectorAll('.slider--container ul li'),
            dots = document.querySelectorAll('.controls-dot'),
            countSlides = slides.length;
        dots[0].classList.add('active--slider')

        for (var i = 0; i < countSlides; i++) {
            for (var j = 0; j < countSlides - 1; j++) {

                fullWidth += slides[j].getBoundingClientRect().width;
            }
        }

    }
}, 100);

//Create controls dots
let imageCreation = ((arr) => {
    arr.forEach(() => {
        let dotCreated = document.createElement('li');
        dotCreated.classList.add('controls-dot');
        controls.appendChild(dotCreated);
    });
    
})

//Slider
let time = (() => {
    sliderTimer = setInterval(function () {
        widthSlides = (containerWidth / 3) + (containerWidth * 0.055);

        if (totalWidth < (widthSlides * (countSlides - 2))) {
            sliderContainer.style.transform += 'translateX(' + (-widthSlides) + 'px)';
            totalWidth += widthSlides;
            active++

            for (let i = 0; i < dots.length; i++) {
                slides[i].setAttribute('data-index', i)
                if (slides[i].getAttribute('data-index') == active) {
                    dots[i - 1].classList.remove('active--slider')
                    slides[i ].classList.remove('active-service')

                    dots[i].classList.add('active--slider')
                    slides[i + 1].classList.add('active-service')
                }
            }
        } else {
            sliderContainer.style.transform = 'translateX(' + 0 + 'px)';
            totalWidth = 0;
            dots[active].classList.remove('active--slider')
            slides[active].classList.remove('active-service')
            active = 0;
            dots[active].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')
        }
    }, 3000)
})
time()


// Buttons
document.addEventListener('click', function (e) {
    var _this = e.target

    // Prev and Next
    if (_this.matches('.wrap-prev')) {
        clearInterval(sliderTimer)

        if (totalWidth > 0) {
            widthSlides = slides[active - 1].getBoundingClientRect().width;
            sliderContainer.style.transform += 'translateX(' + (widthSlides) + 'px)'
            totalWidth -= widthSlides;
            dots[active].classList.remove('active--slider')
            slides[active].classList.remove('active-service')
            active--;
            dots[active].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')

        } else {
            sliderContainer.style.transform = 'translateX(' + (-fullWidth) + 'px)'
            totalWidth = fullWidth;
            dots[active].classList.remove('active--slider')
            slides[active].classList.remove('active-service')
            active = countSlides - 1;
            dots[active].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')
        }
        time()
    }

    if (_this.matches('.wrap-next')) {
        clearInterval(sliderTimer)

        if (active <= countSlides - 2) {
            widthSlides = slides[active].getBoundingClientRect().width;
            sliderContainer.style.transform += 'translateX(' + (-widthSlides) + 'px)'
            totalWidth += widthSlides;
            dots[active].classList.remove('active--slider')
            slides[active].classList.remove('active-service')
            active++;
            dots[active].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')
        } else {
            sliderContainer.style.transform = 'translateX(' + 0 + 'px)';
            totalWidth = 0;
            dots[active].classList.remove('active--slider')
            slides[active].classList.remove('active-service')
            active = 0;
            dots[active].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')
        }
        time()
    }

    //Give attributes
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute('data-index', i)

        //Slides buttons
        if (_this.getAttribute('data-index') == i) {
            for (var j = 0; j < dots.length; j++) {
                dots[j].classList.remove('active--slider')
                slides[j].classList.remove('active-service')
            }

            clearInterval(sliderTimer)
            widthSlides = slides[active].getBoundingClientRect().width;
            sliderContainer.style.transform = 'translateX(' + (-widthSlides * i) + 'px)'
            totalWidth = widthSlides * i;
            dots[i].classList.add('active--slider')
            slides[active + 1].classList.add('active-service')
            active = i;
            time()
        }
    }
})