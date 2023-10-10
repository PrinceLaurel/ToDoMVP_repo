/*const api_url = "http://localhost:3000/testing"

async function logTasks(url) {
    const response = await fetch(url, "http://localhost:3000/testing");
    let tasks = await response.json();
    console.log(tasks);
}
*/
let fetchRes = fetch("http://localhost:3000/testing");

fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })