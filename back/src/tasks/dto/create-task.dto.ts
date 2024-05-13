import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  tgId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
