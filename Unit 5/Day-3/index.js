// const express =require('express');


// const fs =require('fs');

// const path =require('path');


// const app=express();
// const PORT=8080;



// const dbFilePath=path.join(__dirname,"db.json");

// function readDatabase(){
//     const data=fs.readFileSync(dbFilePath, "utf-8");
//     return JSON.parse(data);
// };


// function writeDatabase(data){
//     fs.writeFileSync(dbFilePath,JSON.stringify(data,null,2),"utf-8");
// };

// app.post("/data",(req,res)=>{
//     const {title,body}=req.body;
//     if(!title || !body){
//         return res.status(400).json({err:"title and body required"})
//     }
//     const task = readDatabase();
//     const newTask ={
//         id:task.length+1,title,body
//     }

//     task.push(newTask);
//     writeDatabase (task);
//     res.status(201).json({message:"newTask added"})
// })



// app.get('/', (req,res) =>{
//     res.send('Hello World');
//     }) ;


// app.listen(PORT,()=>{
//     console.log(`server is running in port${PORT}`);
// })

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

const dbFilePath = path.join(__dirname, "db.json");

// Middleware to parse JSON request bodies
app.use(express.json());

// Ensure `db.json` exists
if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify([], null, 2), { encoding: "utf-8" });
}

// Function to read from the database file
function readDatabase() {
    try {
        const data = fs.readFileSync(dbFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return []; // Return an empty array if the file is missing or corrupted
    }
}

// Function to write to the database file
function writeDatabase(data) {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), { encoding: "utf-8" });
}

// POST route to add a new task
app.post("/data", (req, res) => {
    console.log("Request Body:", req.body); // Debugging line
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ error: "Title and body are required" });
    }

    const tasks = readDatabase();
    const newTask = {
        id: tasks.length + 1,
        title,
        body
    };

    tasks.push(newTask);
    writeDatabase(tasks);
    res.status(201).json({ message: "New task added", task: newTask });
});

// GET route to verify server is working
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

