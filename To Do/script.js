

const taskinput = document.getElementById("input")
const button = document.getElementById("button");

const tasklist = document.getElementById("tasklist");
function addtask() {
    if (taskinput.value == null || taskinput.value.trim() === '') {
        alert("Input field is empty");
    }
    else {
        const radio = document.createElement('input');
        radio.type = 'radio';
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = "remove.png";
        img.alt = 'remove';

        const radio1 = tasklist.appendChild(radio);
        const value = tasklist.appendChild(li);
        const img1 = tasklist.appendChild(img);
        value.textContent = taskinput.value
        console.log(taskinput.value);
        taskinput.value = null;
        radio1.addEventListener("click", () => {
            li.classList.add('changed');

        })
        img.addEventListener("click", () => {
            tasklist.removeChild(li);
            tasklist.removeChild(radio1);
            tasklist.removeChild(img);
        })
    }
}

button.addEventListener("click", () => {
    addtask();
});
