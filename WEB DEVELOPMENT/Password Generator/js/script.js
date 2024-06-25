const upperSet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerSet = "abcdefghijklmnopqrstuvxyz";
const numberSet = "1234567890";
const symbolSet = "@#$!";

const passBox = document.getElementById("pass-box")
const total = document.getElementById("total-char")
const upperCase = document.getElementById("upper-case")
const lowerCase = document.getElementById("lower-case")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

let getRandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}
let generatePassword = (password = "") => {
    if (upperCase.checked) {
        password += getRandom(upperSet)
    }
    if (lowerCase.checked) {
        password += getRandom(lowerSet)
    }
    if (numbers.checked) {
        password += getRandom(numberSet)
    }
    if (symbols.checked) {
        password += getRandom(symbolSet)
    } 
    if (password.length < total.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, total.value)
}

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num)
        return subStr
    } else {
        return str
    }
}

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword()
    }
)

