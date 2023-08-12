import readline from "readline";
import chalk from "chalk";

let tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*function addTask() {
  rl.question("Enter task description: ", (description) => {
    tasks.push({ description, completed: false });
    console.log(chalk.green("Task added successfully."));
    mainMenu();
  });
}*/

function addTask() {
  return new Promise((resolve) => {
    rl.question("Enter task description: ", (description) => {
      tasks.push({ description, completed: false });
      console.log(chalk.green("Task added successfully."));
      resolve();
    });
  });
}

function removeTask() {
  return new Promise((resolve) => {
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.description} ${
          task.completed ? "(completed)" : ""
        }`
      );
    });

    rl.question("Enter the number of the task to remove: ", (num) => {
      tasks.splice(num - 1, 1);
      console.log(chalk.green("Task removed successfully."));
      resolve();
    });
  });
}

function completeTask() {
  return new Promise((resolve) => {
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.description} ${
          task.completed ? "(completed)" : ""
        }`
      );
    });

    rl.question("Enter the number of the task to complete: ", (num) => {
      tasks[num - 1].completed = true;
      console.log(chalk.green("Task completed successfully."));
      resolve();
    });
  });
}

function showTasks() {
  tasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.description} ${task.completed ? "(completed)" : ""}`
    );
  });
}

//1. asunc/await
/*async function mainMenu() {
  console.log(
    "\n1. Add task\n2. Remove task\n3. Complete task\n4. Show tasks\n5. Exit"
  );
  rl.question("Choose an option: ", async (option) => {
    switch (option) {
      case "1":
        await addTask();
        mainMenu();
        break;
      case "2":
        await removeTask();
        mainMenu();
        break;
      case "3":
        await completeTask();
        mainMenu();
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
}*/

//2. then()

function mainMenu() {
  console.log(
    "\n1. Add task\n2. Remove task\n3. Complete task\n4. Show tasks\n5. Exit"
  );
  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        addTask().then(mainMenu);
        break;
      case "2":
        removeTask().then(mainMenu);
        break;
      case "3":
        completeTask().then(mainMenu);
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
