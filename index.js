const input = document.querySelector('#input')
const clear = document.querySelector('#clear')
const plus = document.querySelector('#plus')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const division = document.querySelector('#division')
const equalSign = document.querySelector('#equalSign')
const result = document.querySelector('#result')
const record = document.querySelector('#record')

let x = 0
let y = 0
let operator = ''

clear.addEventListener('click', () => {
    clearInput()
    result.value = ''
    input.value = ''
    x = 0
    y = 0
    operator = ''
})

plus.addEventListener('click', () => {
    x = setXorY(input.value)
    operator = '+'
    clearInput()
})

subtract.addEventListener('click', () => {
    x = setXorY(input.value)
    operator = '-'
    clearInput()
})

multiply.addEventListener('click', () => {
    x = setXorY(input.value)
    operator = '*'
    clearInput()
})

division.addEventListener('click', () => {
    x = setXorY(input.value)
    operator = '/'
    clearInput()
})

equalSign.addEventListener('click', () => {
    if (operator !== '') {
        y = setXorY(input.value)
        console.log(x, y);
        result.value = operate()

        var newRecord = document.createElement('div')
        record.appendChild(newRecord)
        newRecord.textContent = String(x) + operator + String(y) + '=' + String(result.value)
    }
    
    clearInput()
    x = 0
    y = 0
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

