const input = document.querySelector('#input')
const clear = document.querySelector('#clear')
const plus = document.querySelector('#plus')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const division = document.querySelector('#division')
const equalSign = document.querySelector('#equalSign')
const result = document.querySelector('#result')
const record = document.querySelector('#record')
const state = document.querySelector('#state')

let x = null
let y = null
let operator = ''

clear.addEventListener('click', () => {
    clearInput()
    result.value = ''
    x = null
    y = null
    operator = ''
    state.textContent = ''
})

plus.addEventListener('click', () => {
    clickEvent('+')
})

subtract.addEventListener('click', () => {
    clickEvent('-')
})

multiply.addEventListener('click', () => {
    clickEvent('*')
})

division.addEventListener('click', () => {
    clickEvent('/')
})

equalSign.addEventListener('click', () => {
    if (operator !== '') {
        y = setXorY(input.value)
        console.log(x, y);
        result.value = operate()

        var newRecord = document.createElement('div')
        record.prepend(newRecord)
        newRecord.textContent = String(x) + ' ' + operator + ' ' + String(y) + ' = ' + String(result.value)
    }

    clearInput()
    x = null
    y = null
    operator = ''
    state.textContent = ''
})

input.addEventListener('keyup', () => {
    if (operator === '') {
        state.textContent = input.value
    } else {
        state.textContent = String(x) + ' ' + operator + ' ' + input.value
    }
})

function setXorY(inputValue) {
    if (inputValue !== '') {
        return parseFloat(inputValue)
    }
    return 0
}

function clearInput() {
    input.value = ''
}

function operate() {
    if (operator === '+') {
        return x + y
    }
    if (operator === '-') {
        return x - y
    }
    if (operator === '*') {
        return x * y
    }
    if (operator === '/') {
        return x / y
    }
    return null
}

function clickEvent(clickedOperator) {
    if (input.value !== '' && x === null) {
        x = setXorY(input.value)
        operator = clickedOperator
        state.textContent = String(x) + ' ' + operator
        clearInput()
    }
}

