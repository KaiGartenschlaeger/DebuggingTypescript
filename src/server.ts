import express from "express";

const app = express();
const port = 3000;

app.use("/", express.static("app"));

app.get("/test", (request, response) => {
    response.send("Hello from test!");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
