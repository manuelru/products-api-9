import { Products } from "src/products/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    // @ManyToMany(() => Products, (product) => product.tags)
    // products: Products[];
}
