import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    fullName: string;

    @Column()
    address: string;

    @Column()
    receiveEmails: boolean;

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
}
