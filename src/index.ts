import express from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT;

app.get("/", (request, response) => {
    response.send("Hello world!");
});

app.get("/user/:userId", (request, response) => {
    response.json({
        id: request.params.userId,
    });
});

app.get("/users", (request, response) => {
    response.json({
        count: 2,
        users: [
            {
                id: uuidv4(),
                firstName: "Max",
                lastName: "Mustermann",
            },
            {
                id: uuidv4(),
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
