import { IsNotEmpty } from 'class-validator';

export class CreateFeedDto {
  @IsNotEmpty()
  food: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  duckCount: number;

  @IsNotEmpty()
  foodCount: number;

  timeFed: Date;
}
