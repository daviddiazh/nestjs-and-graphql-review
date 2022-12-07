import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field( () => Int )
    @IsInt()
    @IsNotEmpty()
    id: number;
    
    @Field( () => String, { nullable: true } )
    @IsString()
    @IsOptional()
    @MaxLength(25)
    description?: string;

    @Field( () => Boolean, { nullable: true } )
    @IsBoolean()
    @IsOptional()
    status?: boolean;

}