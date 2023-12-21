const loader = document.querySelector('.loader')
const loadButton = document.querySelector('.load-btn')
let loading = false

loadButton.addEventListener('click', () => {
    if (loading === false) {
        loader.classList.add('active')
        loadButton.innerText = 'Stop'
        loading = true
    } else {
        loader.classList.remove('active')
        loadButton.innerText = 'Load'
        loading = false
    }
})
