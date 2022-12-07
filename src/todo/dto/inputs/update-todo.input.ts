import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field( () => Int )
    @IsNumber()
    @IsOptional()
    id?: number;
    
    @Field( () => String, { nullable: true } )
    @IsString()
    @IsOptional()
    @MaxLength(25)
    description?: string;

}