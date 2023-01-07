import express from "express";
import { UserController } from "./controllers/user.controller.js";

const app = express();
app.use(express.json());

const userController = new UserController();

//chamando o controller que vai salvar o usuario
app.post("/users", userController.handle);

app.listen(3002, () => console.log("Server is running on Port 3002"));