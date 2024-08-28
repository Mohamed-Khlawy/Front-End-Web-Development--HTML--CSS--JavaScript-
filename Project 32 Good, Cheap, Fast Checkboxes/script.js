const toggles = document.querySelectorAll('.toggle')
const goodEl = document.getElementById('good')
const cheapEl = document.getElementById('cheap')
const fastEl = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)
}))

function doTheTrick(theClickedONe) {
    if(goodEl.checked && cheapEl.checked && fastEl.checked) {
        if(goodEl === theClickedONe) {
            fastEl.checked = false
        }

        if(cheapEl === theClickedONe) {
            goodEl.checked = false
        }

        if(fastEl === theClickedONe) {
            cheapEl.checked = false
        }
    }
}