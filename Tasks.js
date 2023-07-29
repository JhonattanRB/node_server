import readline from "readline";
import chalk from "chalk";

let tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addTask() {
  rl.question("Enter task description: ", (description) => {
    tasks.push({ description, completed: false });
    console.log(chalk.green("Task added successfully."));
    mainMenu();
  });
}

function removeTask() {
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.description} ${task.completed ? "(completed)" : ""}`
    );
  });

  rl.question("Enter the number of the task to remove: ", (num) => {
    tasks.splice(num - 1, 1);
    console.log(chalk.green("Task removed successfully."));
    mainMenu();
  });
}

function completeTask() {
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.description} ${task.completed ? "(completed)" : ""}`
    );
  });

  rl.question("Enter the number of the task to complete: ", (num) => {
    tasks[num - 1].completed = true;
    console.log(chalk.green("Task completed successfully."));
    mainMenu();
  });
}

function showTasks() {
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.description} ${task.completed ? "(completed)" : ""}`
    );
  });
}

function mainMenu() {
  console.log(
    "\n1. Add task\n2. Remove task\n3. Complete task\n4. Show tasks\n5. Exit"
  );
  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        showTasks();
        mainMenu();
        break;
      case "5":
        console.log(chalk.blue("Goodbye!"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Invalid option."));
        mainMenu();
    }
  });
}

mainMenu();
