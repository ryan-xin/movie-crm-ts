import { ArrayMinSize, IsBoolean, IsInt, IsNotEmpty, Min, MinLength } from "class-validator";

export class Movie {
  @IsNotEmpty({ message: "Name can't be empty" })
  public name: string;

  @IsNotEmpty({ message: "Type can't be empty" })
  @MinLength(1, { message: "Type must have at least one item" })
  @ArrayMinSize(1, { message: "Type must have at least one item" })
  public type: string[];

  @IsNotEmpty({ message: "Area can't be empty" })
  @MinLength(1, { message: "Area must have at least one item" })
  @ArrayMinSize(1, { message: "Area must have at least one item" })
  public area: string[];

  @IsNotEmpty({ message: "Duration can't be empty" })
  @IsInt({ message: "Duration must be a integer" })
  @Min(0, { message: "Duration must be greater than 0" })
  public duration: number;

  @IsNotEmpty({ message: "IsHot can't be empty" })
  @IsBoolean({ message: "IsHot must be a boolean" })
  public isHot: boolean;

  @IsNotEmpty({ message: "IsComing can't be empty" })
  @IsBoolean({ message: "IsComing must be a boolean" })
  public isComing: boolean;

  @IsNotEmpty({ message: "IsClassic can't be empty" })
  @IsBoolean({ message: "IsClassic must be a boolean" })
  public isClassic: boolean;

  public description?: string;

  public poster?: string;
}
