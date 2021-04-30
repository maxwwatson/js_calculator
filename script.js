const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
// query selector ges first element that matches selector

// add an event listener. (type, listener)
// this adds a click event - when user clicks anything, check if the click matches a button,
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // do something
    }
})