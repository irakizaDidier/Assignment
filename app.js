let todoItems = [];

document.getElementById('addButton').addEventListener('click', addItem);
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

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
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
                <button onclick="toggleComplete(${index})">${item.completed ? 'Unmark' : 'Complete'}</button>
                <button onclick="deleteItem(${index})">Delete</button>
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

function sortItems(asc) {
    todoItems.sort((a, b) => asc ? a.dueDate - b.dueDate : b.dueDate - a.dueDate);
    displayItems();
}