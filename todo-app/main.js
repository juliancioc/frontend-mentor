const inputValueTodoEl = document.getElementById('value-todo')
const wrapperTodo = document.querySelector(".tasks-wrapper")
const infoEl = document.querySelector('.info')
const filtersEl = document.querySelector('.filters')
const countTodoToLeft = document.querySelector('.count-todo')

let countTodo = 1

inputValueTodoEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const title = inputValueTodoEl.value
        e.preventDefault()

        const newCheckboxEl = document.createElement('input')
        newCheckboxEl.type = 'checkbox'
        newCheckboxEl.className = 'checkbox-todo'

        const newTitleEl = document.createElement('p')
        newTitleEl.innerHTML = title

        const newImgDeleteEl = document.createElement('img')
        newImgDeleteEl.src = './assets/delete-todo.png'
        newImgDeleteEl.alt = 'Delete todo'

        const newBtnDeleteEl = document.createElement('button')
        newBtnDeleteEl.className = 'btn delete'
        newBtnDeleteEl.appendChild(newImgDeleteEl)

        const newDivTodo = document.createElement('div')
        newDivTodo.className = 'todo'
        newDivTodo.appendChild(newCheckboxEl)
        newDivTodo.appendChild(newTitleEl)
        newDivTodo.appendChild(newBtnDeleteEl)

        wrapperTodo.appendChild(newDivTodo)

        infoEl.style.display = 'flex'
        filtersEl.style.display = 'flex'

        countTodoToLeft.innerHTML = `${countTodo++} items left`
        
    }

})
