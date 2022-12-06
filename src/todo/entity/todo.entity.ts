import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType() //Is a custom GraphQL TYPE - Object (Scalar Type)
export class Todo {

    @Field( () => Int )
    id: number;

    @Field( () => String )
    description: string;

    @Field( () => Boolean )
    status: boolean = false;

}