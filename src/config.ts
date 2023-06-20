import { DataSource } from "typeorm";
import Tables from "./entities"
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

export default AppDataSource;