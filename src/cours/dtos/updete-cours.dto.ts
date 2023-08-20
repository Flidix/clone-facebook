import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCoursDto {
  @IsString()
  name: string;

  avatar: string;

  @IsNotEmpty()
  price: number;

  @IsString()
  description: string;

  @IsArray()
  categoties: number[];
}
