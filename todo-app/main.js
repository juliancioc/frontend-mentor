const inputValueTodoEl = document.getElementById('value-todo')
const wrapperTodo = document.querySelector(".tasks-wrapper")
const infoEl = document.querySelector('.info')
const countTodoToLeft = document.querySelector('.count-todo')
const btnClearCompletedEl = document.getElementById('btn-clear-completed')

let countTodo = 0

inputValueTodoEl.addEventListener('keypress', (e) => {
    const title = inputValueTodoEl.value

    if (e.key === 'Enter' && title !== '') {
        e.preventDefault()
        countTodo++

        const newTitleEl = document.createElement('p')
        newTitleEl.innerHTML = title

        const newCheckboxEl = document.createElement('input')
        newCheckboxEl.type = 'checkbox'
        newCheckboxEl.className = 'checkbox-todo'

        newCheckboxEl.addEventListener('click', () => {
            newTitleEl.className = 'todo-done'
            countTodo--
            countTodoToLeft.innerHTML = `${countTodo} items left`
        })

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


        newBtnDeleteEl.addEventListener('click', () => {
            wrapperTodo.removeChild(newDivTodo)


            if (countTodo >= 1) {
                countTodo--
                countTodoToLeft.innerHTML = `${countTodo} items left`
            }

            if (countTodo === 0) {
                infoEl.style.display = 'none'
            }
        })

        wrapperTodo.appendChild(newDivTodo)

        infoEl.style.display = 'flex'

        countTodoToLeft.innerHTML = `${countTodo} items left`
        inputValueTodoEl.value = ''
    }
})