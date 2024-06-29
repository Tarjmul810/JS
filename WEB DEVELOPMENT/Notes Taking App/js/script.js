let btn = document.querySelector("#btn");
let main = document.querySelector("#main");

let saveNotes = () => {
    let notes = document.querySelectorAll(".note textarea")
    let data = []
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )


    if (data == 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

btn.addEventListener(
    "click",
    function () {
        addNote()
    }
);



const addNote = (text = "") => {
    let notes = document.createElement('div');
    notes.classList.add('note')
    notes.innerHTML = `
    <div class="tool">
        <i class=" save fa-solid fa-download"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
     <textarea>${text ?? ""}</textarea> `

    notes.querySelector(".trash").addEventListener(
        "click",
        function () {
            notes.remove()
            saveNotes()
        }
    )

    notes.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
    )

    notes.querySelector("textarea").addEventListener(
        "focusout", function(){
            saveNotes()
        }
    )

    main.appendChild(notes)
    saveNotes()
}

(
    function () {
        let lsNotes = JSON.parse(localStorage.getItem("notes"))
        if (lsNotes == null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                })
            }
        }
    )()