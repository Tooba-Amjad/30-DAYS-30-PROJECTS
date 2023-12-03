const content = document.querySelector('.content');
const button = document.querySelector('#button');

function shownotes() {
    content.innerHTML = localStorage.getItem("notes");
}

shownotes();

function updateStorage() {
    localStorage.setItem("notes", content.innerHTML);
}

button.addEventListener('click', () => {
    let notes = document.createElement('p');
    let img = document.createElement('img');
    notes.className = 'input-box';
    notes.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    notes.appendChild(img);
    content.appendChild(notes);
});

content.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
