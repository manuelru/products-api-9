import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20})
    username: string;

    @Column()
    password: string;

    @OneToOne(() => Profile, )
    @OneToOne(() => Profile, (profile) => profile.user,  {cascade: true}) // specify inverse side as a second parameter
    @JoinColumn()
    profile: Profile

}
