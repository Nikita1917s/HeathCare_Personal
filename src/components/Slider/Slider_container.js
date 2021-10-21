// Create a Slider Container

class SliderContainer {
    constructor() {
    }

    //Render Items - {Block}, {Content}
    render({
        block,
        imageBlock,
        socialNetWork
    }, {
        itemImage,
        bgImage,
        itemTitle,
        itemText,
        extraDescription,
        stars
    }) {
        //Render items if they exist
        let node = document.createElement('li')
        node.innerHTML = (
            `
            ${bgImage ? `<div class="${imageBlock} ${bgImage}"></div>` : ''}

            ${itemImage ? `<div><img src="${itemImage}" alt="${itemTitle}"></div>` : ''}

            ${itemImage && extraDescription ? `
            <div class="slider__name-block">
                <div class="slider__name-inner">
                    <h4>${itemTitle}</h4>
                    <span>${extraDescription}</span>
                </div>
                <div class="stars__rate">${stars} stars</div>
            </div>` : ''}

            ${itemTitle && !extraDescription ? `<h4>${itemTitle}</h4>` : ''}
            ${itemText ? `<p>${itemText}</p>` : ''}

            ${socialNetWork ? `<div class="${socialNetWork}">
                <ul>
                    <li><a class="fb-icon" href="#"></a></li> 
                    <li><a class="tw-icon" href="#"></a></li>
                    <li><a class="ld-icon" href="#"></a></li> 
                </ul>
            </div>` : ''}
            `
        )
        block.appendChild(node)
    }
}

export default new SliderContainer()