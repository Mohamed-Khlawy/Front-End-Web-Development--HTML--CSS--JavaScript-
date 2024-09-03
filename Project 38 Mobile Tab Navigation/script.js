const contentImages = document.querySelectorAll('.content')

const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contentImages[index].classList.add('show')
    })
})

function hideAllContents() {
    contentImages.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}