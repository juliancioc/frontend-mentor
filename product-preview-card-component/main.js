const btnAddProductCartEl = document.getElementById('btn-add-cart')
const toastEl = document.getElementById('toast')

btnAddProductCartEl.addEventListener('click', () => {
    toastEl.style.display = 'block'

    setTimeout(() => {
        toastEl.style.display = 'none'
    }, 1000)
})