const btnSubmitEl = document.querySelector("#btn-submit")

const btnRaintgEl1 = document.querySelector("#btn-rating-1")
const btnRaintgEl2 = document.querySelector("#btn-rating-2")
const btnRaintgEl3 = document.querySelector("#btn-rating-3")
const btnRaintgEl4 = document.querySelector("#btn-rating-4")
const btnRaintgEl5 = document.querySelector("#btn-rating-5")

const cardRatingEl = document.querySelector("#card-rating")
const cardThanksEl = document.querySelector("#card-thanks")

const ratingValueEl = document.querySelector("#rating-value")

let rating = 0


btnRaintgEl1.addEventListener('click', () => {
    rating = 1
})

btnRaintgEl2.addEventListener('click', () => {
    rating = 2
})

btnRaintgEl3.addEventListener('click', () => {
    rating = 3
})

btnRaintgEl4.addEventListener('click', () => {
    rating = 4
})

btnRaintgEl5.addEventListener('click', () => {
    rating = 5
})


btnSubmitEl.addEventListener('click', () => {
    cardRatingEl.remove()
    
    cardThanksEl.style.display = "flex"
    ratingValueEl.innerHTML = `You selected ${rating} out of 5`
})