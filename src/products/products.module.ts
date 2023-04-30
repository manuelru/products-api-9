import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products,Category,Tag])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
