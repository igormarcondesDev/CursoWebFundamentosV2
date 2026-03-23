let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    if (itemOld) itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    if (dotsOld) dotsOld.classList.remove('active')

    let number = indicator.querySelector('.number')
    number.classList.remove('active') // reset animação

    items[active].classList.add('active')
    dots[active].classList.add('active')

    number.innerHTML = '0' + (active + 1)

    // força reflow pra animar de novo
    void number.offsetWidth

    number.classList.add('active')
}

// botão next
nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
}

// botão prev
prevButton.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1
    setSlider()
}

// iniciar
setSlider()