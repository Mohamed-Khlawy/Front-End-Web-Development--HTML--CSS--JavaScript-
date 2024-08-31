const images = document.getElementById('imgs')

const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')

const image = document.querySelectorAll('#imgs img')

let index = 0

let interval = setInterval(run, 2000)

function run() {
    index++

    changeImgae()
}

function changeImgae() {
    if(index > image.length - 1) {
        index = 0
    }

    else if(index < 0) {
        index = image.length - 1
    }

    images.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

previousBtn.addEventListener('click', () => {
    index--
    changeImgae()
    resetInterval()
})

nextBtn.addEventListener('click', () => {
    index++
    changeImgae()
    resetInterval()
})