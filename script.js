const button = document.getElementById("cou");

button.addEventListener("click", function () {
    let count = parseInt(button.innerText);
    count++;
    button.innerText = count;
    button.style.backgroundColor = "gray";
    button.style.color = "white";
    button.style.border = none
    button.style.borderWidth = "2px";
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
    button.innerText = 0;
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.borderColor = "";
    button.style.borderWidth = "";
    button.style.borderStyle = "";
});