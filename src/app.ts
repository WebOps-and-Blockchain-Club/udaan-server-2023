import "reflect-metadata"
import express from 'express';
import { DataSource } from "typeorm";
import { User } from "./entities/user";
import Tables from "./entities"
const app = express();
app.use(express.json());
const port = 8000;

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Akshay",
    database: "udaan",
    entities: Tables,
    synchronize: true,
    logging: true
});

app.post('/registration', async (req, resp) => {
    const userRepo = AppDataSource.getRepository(User);
    let user: User = new User();
    user = { ...req.body };
    let userInserted: any = await userRepo.save(user);
    resp.json({ result: "saved" });
});



AppDataSource.initialize().then(() => {
    console.log("chalaaaaaaa");
    app.listen(port, () => {
        console.log(`Timezones by location application is running on port ${port}.`);
    })
}).catch((err) => console.log("erroooooooooor", err));

