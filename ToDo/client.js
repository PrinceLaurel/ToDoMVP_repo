async function logTasks() {
    const response = await fetch("http://localhost:3000/testing");
    const tasks = await response.json();
    console.log(tasks);
}