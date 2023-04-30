import { Category } from "src/categories/entities/category.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    rating: string;


    @JoinTable()
    @ManyToMany(() => Category, (category) => category.products, {cascade:true})
    category: Category[]


    // @JoinTable()
    // @ManyToMany(() => Tag, (tags) => tags.products)
    // tags: Category[]


}
