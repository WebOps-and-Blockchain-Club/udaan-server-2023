import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    fullName!: string;

    @Column()
    gender!: string;

    @Column()
    email!: string;

    @Column()
    aadhar!: string;

    @Column()
    password!: string;

    @Column()
    address!: string;

    @Column()
    dateOfBirth!: string;

    @Column()
    state!: string;

    @Column()
    district!: string;

    @Column()
    pinCode!: number;

    @Column()
    recentPhoto!: string;

    @Column()
    highestEducation!: string;
}