import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

import slugify from 'slugify';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    // const model = await this.categoryRepository.create(createCategoryDto);
    // this.categoryRepository.save(model);
    // return model;
  }
  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: string) {
    const menu = this.categoryRepository.findOne({ where: {id}});
    return menu;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
