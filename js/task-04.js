const container = document.querySelector('#counter');
const spanValue = document.querySelector('#value');
const buttonInscrement = document.querySelector('button[data-action="increment"]');
const buttonDescrement = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

buttonInscrement.addEventListener("click", plus);
buttonDescrement.addEventListener("click", minus);

function counterValueElement() {
    spanValue.textContent = counterValue;
}

function plus(evt) {
    counterValue += 1;
    counterValueElement()
}

function minus(evt) {
    counterValue -= 1;
    counterValueElement()
}
counterValueElement()






