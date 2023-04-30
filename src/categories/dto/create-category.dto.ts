import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    id:string;

    @IsString({ each: true })
    @IsArray()
    namecat: string[];
}
