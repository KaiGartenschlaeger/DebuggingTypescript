import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT;

app.get("/", (request, response) => {
    response.send("Hello world!");
});

app.get("/users", (request, response) => {
    response.json({
        count: 2,
        users: [
            {
                id: 1,
                firstName: "Max",
                lastName: "Mustermann",
            },
            {
                id: 2,
                firstName: "Susi",
                lastName: "Lustig",
            },
        ],
    });
});

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
