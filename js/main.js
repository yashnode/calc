const currentVal = document.querySelector(".curr-val")
const preVal = document.querySelector(".prev-val")
const buttonClick = document.querySelectorAll("button");
let displayArr = []
let num1 = 0;

//button clicks
buttonClick.forEach((el) => el.addEventListener("click", () => {
    if (el.getAttribute("data-key")) {
        let number = el.getAttribute("data-key")
        if (displayArr.length < 6) {
            displayArr.push(number)
            num1 = parseFloat(displayArr.join(''))
            display(num1)

        }
    } else if (el.getAttribute("data-function") == 'backspace') {
        displayArr.pop()
        num1 = parseFloat(displayArr.join(''))
        if (displayArr.length == 0) {
            currentVal.innerHTML = '0'
            return
        }
        display(displayArr)
    } else if (el.getAttribute("data-function") == 'clear') {
        clear()
    } else if (el.getAttribute("data-function") == 'plus-minus') {

        if (num1 > 0) {
            num1 = -Math.abs(num1)
            display(num1)
        } else {
            num1 = Math.abs(num1)
            display(num1)
        }

    }
}));

//keyboard input
document.addEventListener("keydown", (event) => {
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

)

function clear() {
    displayArr = [];
    currentVal.innerHTML = '0'
    num1 = parseFloat(displayArr.join(''))
}
const display = (num) => { currentVal.innerText = num }