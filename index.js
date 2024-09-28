require("dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors({origin: "http://localhost:5173"}));

const port = process.env.port || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const urlController = require("./routes/url/urlController");
app.use("/url", urlController);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})