import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { async } from 'rxjs';

@Injectable()
export class TagsService {

  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}


  async create(createTagDto: CreateTagDto) {
    const model = await this.tagsRepository.create(createTagDto);
    this.tagsRepository.save(model);
    return model;;
  }

  findAll() {
    return this.tagsRepository.find();;
  }

  findOne(id: string) {
    const tag = this.tagsRepository.findOne({ where: {id}});
    return tag;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
