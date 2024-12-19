const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-list")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key === "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

let addToDo = (text) => {
    let list = document.createElement("li")
    list.innerHTML = `
    ${text}
    <i class="fa-solid fa-times"></i>
    `
    list.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
        }
    )

    list.querySelector("i").addEventListener(
        "click",
        function () {
            list.remove()
        }
    )
    toDoBox.appendChild(list)
}