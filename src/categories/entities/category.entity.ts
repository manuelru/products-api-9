import { Products } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    namecat: string;

    @ManyToMany(() => Products, (product) => product.category)
    products: Products[];
}
