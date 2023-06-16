import "reflect-metadata"
import express from 'express';
import { DataSource } from "typeorm";
import { User } from "./Entities/user";
import Tables from "./Entities"
 
const app=express();
app.use(express.json());
const port=8000;



app.get('/',async function(req,res){

   
    const userRepo =AppDataSource.getRepository(User);

//find all the records
const allRecords= await userRepo.find();
    res.json(allRecords);

    //  res.send("ef");

//delete record
//     await userRepo.delete(1);
//     res.send("deleted");



// //Insert user
// let user: User=new User();
// user.emqaail="hello@gmail.com";
// user.firstName="hello";
// user.lastName="hi";

// const userInserted= await userRepo.save(user);
// res.json(userInserted);



//update
// await userRepo.update(3,{firstName:"helloUpdate",lastName:"hiUpdtae",emqaail:"helloUpdate@gmsil.com"  });
// res.send("udated");



//filter
// const record=await userRepo.findOne({where:{firstName:"Dikshant"}});
// res.json(record);

// res.json({});
});

const AppDataSource= new DataSource({
    type :"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"A1dikshant",
    database:"typeorm_db",
    entities:Tables,
    synchronize:true,
    logging:true


});

AppDataSource.initialize().then(()=>{
    console.log("chalaaaaaaa");
    app.listen(port,()=>{
        console.log('Timezones by location application is running on port ${port}.');
    })
}).catch((err)=>console.log("erroooooooooor",err));

