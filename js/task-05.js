const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInput);


function onInput() {
   
    if(input.value.trim() === '') {
     span.textContent = 'Anonymous';
    } else {
        span.textContent = input.value;
    }
}
onInput()


