const taskinput = document.getElementById("input")
const button = document.getElementById("button");
const tasklist = document.getElementById("tasklist");

function addtask() {
    if (taskinput.value == null || taskinput.value.trim() === '') {
        alert("Input field is empty");
    } else {
        // Create a container div for each task
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const radio = document.createElement('input');
        radio.type = 'radio';

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = "remove.png";
        img.alt = 'remove';

        // Append elements to the task container
        taskContainer.appendChild(radio);
        taskContainer.appendChild(li);
        taskContainer.appendChild(img);

        // Set the task text content
        li.textContent = taskinput.value;

        // Append the task container to the task list
        tasklist.appendChild(taskContainer);

        // Clear the input field
        taskinput.value = null;

        // Add event listeners to radio and img elements
        radio.addEventListener("click", () => {
            li.classList.add('changed');
        });

        img.addEventListener("click", () => {
            tasklist.removeChild(taskContainer);
        });
    }
}

button.addEventListener("click", () => {
    addtask();
});
