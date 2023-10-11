let fetchRes = fetch("http://localhost:3000/testing");

fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })