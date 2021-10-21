document.addEventListener('click', (e) => {
    var _this = e.target

    if(_this.matches('.modal')) {
        let classModal = _this.getAttribute('class')
        document.querySelector(`.${classModal} .modal-dialog`).style.top = 'calc(-100vh - 300px)'
        setTimeout(() => {
            document.querySelector(`.${classModal}`).classList.add('fade')
        }, 1000)
    }

    if(_this.matches('.btn-primary')) {
        let id = _this.getAttribute('data-bs-target')
        document.querySelector(id).classList.remove('fade')
        setTimeout(() => {
            document.querySelector(`${id} .modal-dialog`).style.top = '0px'
        }, 1000)
    }

    if(_this.matches('.close')) {
        let classModal = _this.getAttribute('data-bs-dismiss')
        document.querySelector(`.${classModal} .modal-dialog`).style.top = 'calc(-100vh - 300px)'
        setTimeout(() => {
            document.querySelector(`.${classModal}`).classList.add('fade')
            
        }, 1000)
    }
}) 

