//Create value
let value = document.createElement("h2");
value.id = "value";
value.innerHTML = "0";
document.body.appendChild(value);

//Create decrement button
let btnDecrement = document.createElement("button");
btnDecrement.id = "btnDecrement"
btnDecrement.innerHTML = "-";
document.body.appendChild(btnDecrement);

//Create increment button
let btnIncrement = document.createElement("button");
btnIncrement.id = "btnIncrement"
btnIncrement.innerHTML = "+";
document.body.appendChild(btnIncrement);

//Create reset button
let btnReset = document.createElement("button");
btnReset.id = "btnReset"
btnReset.innerHTML = "Reset";
document.body.appendChild(btnReset);

let btnSurprise = document.createElement("button");
btnSurprise.id = "btnSurpise"
btnSurprise.innerHTML = "Click!"
document.body.appendChild(btnSurprise);

let count = 0; // set initial value

//decrement event
btnDecrement.addEventListener("click", () => {
    count--;
    value.innerHTML = count;
});

//increment event
btnIncrement.addEventListener("click", () => {
    count++;
    value.innerHTML = count;
});

//reset event
btnReset.addEventListener("click", () => {
    count = 0;
    value.innerHTML = count;
});

btnSurprise.addEventListener("click", () =>{
    alert("Hope that's correct😅")
})