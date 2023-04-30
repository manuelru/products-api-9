import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Any, Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { log } from 'console';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    // @InjectRepository(Tag)
    // private tagsRepository: Repository<Tag>
  ) { }

  async create(createProductDto: CreateProductDto) {
    // Creamos una nueva instancia de Categoria y le asignamos el nombre
    // const categoria = new Category();
    // categoria.catename = CreateCategoryDto.name;
    // // Guardamos la categoría en la base de datos
    // await this.categoryRepository.save(categoria);



    // Buscamos la categoría por su nombre en la base de datos
    let categor = await this.categoryRepository.findOne({
      where: {
        namecat: CreateCategoryDto.name
      }
    });

    // Si la categoría no existe, la creamos y la guardamos en la base de datos
    if (!categor) {
      categor = new Category();
      categor.namecat = CreateCategoryDto.name;
      categor = await this.categoryRepository.save(categor);
    }

    // Creamos una nueva instancia de Producto y le asignamos la categoría
    const producto = new Products();
    producto.image = createProductDto.image;
    producto.name = createProductDto.name;
    producto.price = createProductDto.price;
    producto.description = createProductDto.description;
    producto.rating = createProductDto.rating
    producto.category = [categor];

    // Guardamos el producto en la base de datos
    await this.productsRepository.save(producto);

     return producto;
   }

  // async create(body: CreateCategoryDto) {
  //   const sizes = await Promise.all(body.namecat.map(size => this.selectOrCreateSize(size)));
  //   const product = this.productsRepository.create(
  //   {
  //   ...body,  ...sizes
  //   }
  //   );
  //   await this.productsRepository.save(product);
  //   return product;
  // }

    // private async selectOrCreateSize(id:any) {
    //   const sizeEntity = await this.categoryRepository.findOne({ where: {id}});
    //   if (sizeEntity) {
    //   return sizeEntity;
    //   }
    //   const newSize = this.categoryRepository.create(sizeEntity);
    //   return this.categoryRepository.save(newSize);
    // }

  findAll() {
    return this.productsRepository.find({
      relations: {
        category: true,
        //tags:true,
    },
    });
  }

  findOne(id: string) {
    const menu = this.productsRepository.findOne({ where: {id}});
    return menu;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
