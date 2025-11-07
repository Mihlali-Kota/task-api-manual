const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT);
});
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});
app.get("/tasks", (request, response) => {
    const tasks = {
        "Task": "Coding" 
    };

    response.send(tasks);
})