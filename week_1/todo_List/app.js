flatpickr("#dueDate", {
    enableTime: true,
    dateFormat: "Y-m-dTH:i",
    altInput: true,
    altFormat: "F j, Y h:i K",
    time_24hr: true,
    defaultDate: new Date().toISOString(),
});

let todoItems = [];
let editIndex = -1;

document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('updateButton').addEventListener('click', updateItem);
document.getElementById('sortAscButton').addEventListener('click', () => sortItems(true));
document.getElementById('sortDescButton').addEventListener('click', () => sortItems(false));

function addItem() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (title === '' || dueDate === '') {
        alert('Title and Due Date are required!');
        return;
    }

    const newItem = {
        title,
        description,
        dueDate: new Date(dueDate),
        completed: false
    };

    todoItems.push(newItem);
    displayItems();
    clearInputFields();
}

function updateItem() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (title === '' || dueDate === '') {
        alert('Title and Due Date are required!');
        return;
    }

    todoItems[editIndex] = {
        title,
        description,
        dueDate: new Date(dueDate),
        completed: todoItems[editIndex].completed
    };

    displayItems();
    clearInputFields();
    toggleButtons(false);
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    editIndex = -1;
}

function displayItems() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todoItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'todo-item';
        if (item.completed) itemDiv.classList.add('completed');

        itemDiv.innerHTML = `
            <div>
                <strong>${item.title}</strong>
                <p>${item.description}</p>
                <p>${item.dueDate.toLocaleString()}</p>
            </div>
            <div class="buttons">
                <button onclick="toggleComplete(${index})">${item.completed ? 'Unmark' : 'Finish'}</button>
                <button class="edit-button" onclick="editItem(${index})">Edit</button>
                <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;

        todoList.appendChild(itemDiv);
    });
}

function toggleComplete(index) {
    todoItems[index].completed = !todoItems[index].completed;
    displayItems();
}

function deleteItem(index) {
    todoItems.splice(index, 1);
    displayItems();
}

function editItem(index) {
    const item = todoItems[index];
    document.getElementById('title').value = item.title;
    document.getElementById('description').value = item.description;
    document.getElementById('dueDate').value = item.dueDate.toISOString().slice(0, 16);
    editIndex = index;
    toggleButtons(true);
}

function toggleButtons(editMode) {
    document.getElementById('addButton').style.display = editMode ? 'none' : 'block';
    document.getElementById('updateButton').style.display = editMode ? 'block' : 'none';
}

function sortItems(asc) {
    todoItems.sort((a, b) => asc ? a.dueDate - b.dueDate : b.dueDate - a.dueDate);
    displayItems();
}