import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use("/", express.static("app"));
app.get("/test", (request, response) => {
    response.send("Hello from test!");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
