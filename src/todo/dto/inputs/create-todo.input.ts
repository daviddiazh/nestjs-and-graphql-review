import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInput {
    
    @Field( () => String )
    @IsString()
    @IsNotEmpty({message: 'La descripción del todo no puede estár vacía.'})
    @MaxLength(25)
    description: string;

}