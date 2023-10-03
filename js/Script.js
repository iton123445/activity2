  let todoList = [];

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();

            if (taskText !== "") {
                let task = {
                    id: Date.now(),
                    task: taskText,
                    completed: false
                };
                todoList.push(task);
                taskInput.value = "";
                updateTaskList();
            }
        }

            function updateTaskList() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            todoList.forEach(task => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `
                    <span id="texts" class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${task.id})">${task.task}</span>
                    <button ${task.completed ? 'disabled' : ''} onclick="updateTask(${task.id})">Update</button>
                    <button ${task.completed ? 'disabled' : ''} onclick="deleteTask(${task.id})">Delete</button>
                `;
                taskList.appendChild(listItem);
            });
        }


        function toggleTask(id) {
            let task = todoList.find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
                updateTaskList();
            }
        }

        function updateTask(id) {
            let task = todoList.find(task => task.id === id);
            if (task) {
                const newTaskText = prompt("Update the task:", task.task);
                if (newTaskText !== null) {
                    task.task = newTaskText;
                    updateTaskList();
                }
            }
        }

        function deleteTask(id) {
            let index = todoList.findIndex(task => task.id === id);
            if (index !== -1) {
                todoList.splice(index, 1);
                updateTaskList();
            }
        }

        window.onload = updateTaskList;