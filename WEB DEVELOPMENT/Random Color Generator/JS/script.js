function getColor () {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let getCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, getCode);
    document.body.style.backgroundColor = getCode;
    document.getElementById("Color-Code").innerHTML = getCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();