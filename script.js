let btns = new Array();
btns = document.querySelectorAll("input[type=button]");
let result = document.getElementById("textbox");
console.log(btns);


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", funbtnclick);
}

function funbtnclick(event) {
    if (event.target.value == "C") {
        result.value = "";
        console.log(event.target.value);

    } else if (event.target.value == "=") {
        result.value = eval(result.value);

    } else {
        result.value += event.target.value;
    }
    console.log(event.target.innerText);
    console.log(result.value);
}