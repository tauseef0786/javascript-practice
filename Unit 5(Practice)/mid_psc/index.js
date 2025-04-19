const express = require("express");
require("dotenv").config(); 

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    try {
        res.status(200).json({ msg: "This is Test Route" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Something went wrong, try again later" });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
