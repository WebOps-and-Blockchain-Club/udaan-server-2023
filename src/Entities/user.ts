import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    firstName!: string;

    @Column()
    middleName!: string;

    @Column()
    lastName!: string;

    @Column()
    fatherName!: string;

    @Column()
    motherName!: string;

    @Column()
    pan!: string;

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
    pincode!: string;

    @Column()
    photo!: string;

    @Column()
    educationQualification!: string;

    @Column()
    specialQualification!: string;

    @Column()
    reasonToJoin!: string;
}