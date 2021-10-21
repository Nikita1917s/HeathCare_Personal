//https://imgbox.com/g/dETpEILUn5  - images 
//https://app.json-generator.com/Q9i28btwtq2F -- JSON

import SliderContainer from "./Slider_container"

//Render Solution List
let solutionObj = {
    block: document.querySelector('.solution__main ul'),
    imageBlock: "solution__inner-img"
}

const renderSolution = () => {
    fetch("https://api.json-generator.com/templates/58EuP4i4-YcL/data", {
        headers: {
            "Authorization": "Bearer 4rdc8eajiwl4r38m07q12eba44909tytxl857sgj"
        }
    })
        .then(res => res.json())
        .then(data => data.forEach(elem => SliderContainer.render(solutionObj, elem)))
}
renderSolution()


//Render Servises List
let servicesObj = {
    block: document.querySelector('.services__list ul')
}

const renderServices = () => {
    fetch("https://api.json-generator.com/templates/NvMLjEVUDZQa/data", {
        headers: {
            "Authorization": "Bearer zb98zujwqhfpqmsk8bw25fjgyjk297mx3od85pfi"
        }
    })
        .then(res => res.json())
        .then(data => data.forEach(elem => SliderContainer.render(servicesObj, elem)))
}
renderServices()


//Render Doctors List
let doctorsObj = {
    block: document.querySelector('.doctors__list ul'),
    socialNetWork: "doctors__social"
}

const renderDoctors = () => {
    fetch("https://api.json-generator.com/templates/Q9i28btwtq2F/data", {
        headers: {
            "Authorization": "Bearer zb98zujwqhfpqmsk8bw25fjgyjk297mx3od85pfi"
        }
    })
        .then(res => res.json())
        .then(data => data.forEach(elem => SliderContainer.render(doctorsObj, elem)))
}
renderDoctors()


//Render Doctors List
let commentsObj = {
    block: document.querySelector('.reviews__sleder ul')
}

const renderComments = () => {
    fetch("https://api.json-generator.com/templates/stnh2FXnjx_y/data", {
        headers: {
            "Authorization": "Bearer zb98zujwqhfpqmsk8bw25fjgyjk297mx3od85pfi"
        }
    })
        .then(res => res.json())
        .then(data => data.forEach(elem => SliderContainer.render(commentsObj, elem)))
}
renderComments()