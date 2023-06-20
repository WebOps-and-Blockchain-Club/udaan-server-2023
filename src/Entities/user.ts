import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";


@Entity("User")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    FullName!:string;

    @Column()
    Gender!:string;

    @Column()
    Email!:string;

    @Column()
    Aadhar!:string;

    @Column()
    Password!:string;

    @Column()
    Address!:string;

    @Column()
    DateOfBirth!:string;

    @Column()
    State!:string;

    @Column()
    District!:string;

    @Column()
    PinCode!:string;

    @Column()
    RecentPhoto!:string;

    @Column()
    HighestEducation!:string;
}