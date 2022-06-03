const currentVal = document.querySelector(".curr-val")
const preVal = document.querySelector(".prev-val")
const buttonClick = document.querySelectorAll("button");
let displayArr = []
let num1 = 0;
let num2 = 0;
let result = 0;
let operation = ''
let resultOut = false
let operationCalled = false

//button clicks
buttonClick.forEach((el) => el.addEventListener("click", () => {
    if (el.getAttribute("data-key")) {
        if (resultOut == false) {
            let number = el.getAttribute("data-key")
            if (displayArr.length < 6) {
                displayArr.push(number)
                num1 = parseFloat(displayArr.join(''))
                display(num1)
            }
        }
    } else if (el.getAttribute("data-function") == 'backspace') {
        if (resultOut == false) {
            displayArr.pop()
            num1 = parseFloat(displayArr.join(''))
            if (displayArr.length == 0) {
                currentVal.innerHTML = '0'
                return
            }
            display(num1)
        }
    } else if (el.getAttribute("data-function") == 'clear') {
        clear()
    } else if (el.getAttribute("data-function") == 'plus-minus') {
        if (resultOut == false) {
            if (num1 > 0) {
                num1 = -Math.abs(num1)
                display(num1)
            } else {
                num1 = Math.abs(num1)
                display(num1)
            }
        }

    } else if (el.getAttribute("data-function") == 'divide') {
        if (operationCalled == false) {
            num2 = num1
            operation = '÷'
            moveUp(num1, operation)
            operationCalled = true
        }

    } else if (el.getAttribute("data-function") == 'multiply') {
        if (operationCalled == false) {
            num2 = num1
            operation = '×'
            moveUp(num1, operation)
            operationCalled = true
        }

    } else if (el.getAttribute("data-function") == 'add') {
        if (operationCalled == false) {
            num2 = num1
            operation = '+'
            moveUp(num1, operation)
            operationCalled = true
        }
    } else if (el.getAttribute("data-function") == 'minus') {
        if (operationCalled == false) {
            num2 = num1
            operation = '-'
            moveUp(num1, operation)
            operationCalled = true
        }

    } else if (el.getAttribute("data-function") == 'percent') {
        if (operationCalled == false) {
            num2 = num1
            operation = '%'
            moveUp(num1, operation)
            operationCalled = true
        }

    } else if (el.getAttribute("data-function") == 'equal') {
        result = parseFloat(equal(num1, num2, operation)).toFixed(3)
        if (result % 1 == 0) {
            result = parseInt(result)
        }
        if (result.toString().length > 9) {
            console.log('test')
            result = result.toExponential(3)
        }
        preVal.innerHTML = num2 + operation + num1
        display(result)
        resultOut = true

    } else if (el.getAttribute("data-function") == 'dice') {
        let dice = getDice()
        document.getElementById('notification').innerText = `You rolled the number: ${dice}`
        document.querySelector('.noti-wrap').style.visibility = 'visible';
    }
}));

//keyboard input
document.addEventListener("keydown", (event) => {
        if (resultOut == false) {
            if (isFinite(parseFloat(event.key))) {
                if (displayArr.length < 6) {
                    displayArr.push(event.key)
                    num1 = parseFloat(displayArr.join(''))
                    display(num1)
                }
            } else if (event.key == 'Backspace') {
                displayArr.pop()
                num1 = parseFloat(displayArr.join(''))
                if (displayArr.length == 0) {
                    currentVal.innerHTML = '0'
                    return
                }
                display(num1)
            }
        }
    }

)

function clear() {
    displayArr = [];
    preVal.innerHTML = '0'
    num2 = 0
    currentVal.innerHTML = '0'
    num1 = parseFloat(displayArr.join(''))
    operationCalled = false
    resultOut = false
    document.querySelector('.noti-wrap').style.visibility = 'hidden';
}
const display = (num1) => { currentVal.innerText = num1 }

function moveUp(num, str) {
    currentVal.innerHTML = '0'
    displayArr = [];
    num1 = parseFloat(displayArr.join(''))
    preVal.innerHTML = num + str
}


function equal(num1, num2, operation) {
    switch (operation) {
        case '÷':
            return num2 / num1
        case '×':
            return num1 * num2
        case '-':
            return num2 - num1
        case '+':
            return num1 + num2
        case '%':
            return num2 * num1 / 100
    }
}

const getDice = () => { return Math.floor(Math.random() * 6) + 1 }