import "reflect-metadata"
import express from 'express';
import { User } from "./entities/user";
import AppDataSource from "./config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv"
const app = express();
app.use(express.json());
const port = 8000;
app.use(
    cors({
        origin: "*",
    })
);
dotenv.config();
app.post('/registration', async (req, resp) => {
    const userRepo = AppDataSource.getRepository(User);
    const emailCheck = await userRepo.findOne({
        where: { email: req.body.email },
    });
    if (!emailCheck) {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        let user: User = new User();
        user = { ...req.body };
        user.password = hashedPassword;
        let userInserted = await userRepo.save(user);
        const id = userInserted.id;
        jwt.sign(
            { id },
            process.env.TOKEN_SECRET || "",
            { expiresIn: "2h" },
            (error, token) => {
                if (error) {
                    resp.json({ userInserted: "Cant Intsert the User" });
                }
                resp.json({ auth: token });
                return;
            }
        );
    } else {
        resp.json({ result: "User already exists" });
    }

});

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`application is running on port ${port}.`);
    })
}).catch((err) => console.log("error", err));

